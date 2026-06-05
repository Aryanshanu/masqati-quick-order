import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, RotateCcw } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

type Msg = { id: string; role: "user" | "assistant"; content: string };

let msgIdCounter = 0;
const nextMsgId = () => `msg-${++msgIdCounter}`;

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-assistant`;

const GREETING = "Welcome to Masqati! 🍦 I know our entire menu — ice creams, chaats, pizzas, shakes & more. Ask me anything — prices, recommendations, combos, or what's best for a party!";

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Msg[];
  onDelta: (text: string) => void;
  onDone: () => void;
  onError: (err: string) => void;
}) {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages: messages.map(({ role, content }) => ({ role, content })) }),
  });

  if (!resp.ok) {
    const data = await resp.json().catch(() => ({}));
    onError(data.error || "Something went wrong. Please try again.");
    return;
  }

  if (!resp.body) {
    onError("No response received.");
    return;
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    let idx: number;
    while ((idx = buffer.indexOf("\n")) !== -1) {
      let line = buffer.slice(0, idx);
      buffer = buffer.slice(idx + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;
      const json = line.slice(6).trim();
      if (json === "[DONE]") { onDone(); return; }
      try {
        const parsed = JSON.parse(json);
        const content = parsed.choices?.[0]?.delta?.content;
        if (content) onDelta(content);
      } catch {
        buffer = line + "\n" + buffer;
        break;
      }
    }
  }

  // flush remaining
  if (buffer.trim()) {
    for (let raw of buffer.split("\n")) {
      if (!raw || raw.startsWith(":") || raw.trim() === "") continue;
      if (raw.endsWith("\r")) raw = raw.slice(0, -1);
      if (!raw.startsWith("data: ")) continue;
      const json = raw.slice(6).trim();
      if (json === "[DONE]") continue;
      try {
        const parsed = JSON.parse(json);
        const content = parsed.choices?.[0]?.delta?.content;
        if (content) onDelta(content);
      } catch {}
    }
  }
  onDone();
}

const ChatAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { id: nextMsgId(), role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");

    const userMsg: Msg = { id: nextMsgId(), role: "user", content: text };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setLoading(true);

    let assistantSoFar = "";

    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && prev.length > updatedMessages.length) {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
          );
        }
        return [...prev.slice(0, -1), prev[prev.length - 1], { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      // Only send conversation history (skip greeting for cleaner context)
      const historyForApi = updatedMessages.filter(
        (m) => m.content !== GREETING
      );

      const assistantMsgId = nextMsgId();

      await streamChat({
        messages: historyForApi,
        onDelta: (chunk) => {
          if (!assistantSoFar) {
            // First chunk — add new assistant message
            assistantSoFar = chunk;
            setMessages((prev) => [...prev, { id: assistantMsgId, role: "assistant", content: chunk }]);
          } else {
            assistantSoFar += chunk;
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantMsgId ? { ...m, content: assistantSoFar } : m
              )
            );
          }
        },
        onDone: () => setLoading(false),
        onError: (err) => {
          setMessages((prev) => [
            ...prev,
            { id: nextMsgId(), role: "assistant", content: `Sorry, ${err}` },
          ]);
          setLoading(false);
        },
      });
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: nextMsgId(), role: "assistant", content: "Sorry, something went wrong. Please try again!" },
      ]);
      setLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([{ id: nextMsgId(), role: "assistant", content: GREETING }]);
    setInput("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-28 sm:bottom-24 right-4 z-50 h-14 w-14 rounded-full pink-gold-gradient shadow-lg flex items-center justify-center active:scale-95 transition-transform animate-pulse-pink"
          aria-label="Chat with Masqati"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      )}

      {/* Chat Sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-[400px] p-0 flex flex-col bg-background border-l border-border/30"
        >
          {/* Header */}
          <SheetHeader className="px-4 py-3 border-b border-border/30 bg-primary/5 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full pink-gold-gradient flex items-center justify-center">
                  <span className="text-white text-sm font-bold">M</span>
                </div>
                <div>
                  <SheetTitle className="text-sm font-display font-bold text-foreground">
                    Masqati Assistant
                  </SheetTitle>
                  <p className="text-[10px] text-muted-foreground font-body">
                    Ask about menu, prices & recommendations
                  </p>
                </div>
              </div>
              <button
                onClick={resetChat}
                className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                aria-label="New chat"
              >
                <RotateCcw className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            </div>
          </SheetHeader>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
          >
            {messages.map((msg, i) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm font-body ${
                    msg.role === "user"
                      ? "pink-gold-gradient text-white rounded-br-md"
                      : "bg-card border border-border/40 text-foreground rounded-bl-md shadow-sm"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="prose prose-sm max-w-none [&_p]:m-0 [&_ul]:my-1 [&_li]:my-0 [&_strong]:text-foreground [&_h1]:text-base [&_h2]:text-sm [&_h3]:text-sm">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}

            {loading && !messages[messages.length - 1]?.content && (
              <div className="flex justify-start">
                <div className="bg-card border border-border/40 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 bg-pink rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 bg-pink rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 bg-pink rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex-shrink-0 px-4 py-3 border-t border-border/30 bg-background">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our menu..."
                className="flex-1 h-10 rounded-full bg-secondary/50 border border-border/30 px-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-pink/30 transition-all"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="h-10 w-10 rounded-full pink-gold-gradient flex items-center justify-center disabled:opacity-40 active:scale-95 transition-all shadow-sm"
              >
                <Send className="h-4 w-4 text-white" />
              </button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ChatAssistant;
