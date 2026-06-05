

## Add AI Menu Assistant Chatbot

### Overview
Add a floating chat button (like WhatsApp widget) that opens a chat drawer where customers can ask questions about the menu, get recommendations, combos, and price info. Uses Lovable AI (Gemini) via an edge function -- no API key needed from the user.

### Architecture

```text
User taps chat icon → Chat drawer opens → Types question
  → Sends to edge function (with full conversation history + system prompt with menu data)
  → Edge function calls Lovable AI gateway
  → Streams/returns response → Renders with markdown in chat
```

### Files

**1. Create Edge Function: `supabase/functions/chat-assistant/index.ts`**
- Receives `{ messages: [{role, content}] }` from frontend
- Prepends the full menu system prompt (the one user provided) as system message
- Calls Lovable AI gateway (`google/gemini-2.5-flash`) with conversation history
- Returns AI response as JSON `{ reply: "..." }`
- No auth required (public menu assistant)

**2. Create Component: `src/components/ChatAssistant.tsx`**
- Floating chat button (bottom-right, above the bottom nav) with a pink-gold gradient chat icon
- Opens a full-height drawer/sheet from the right side
- Chat UI with:
  - Message bubbles (user = right-aligned, assistant = left-aligned with gold accent)
  - Input bar at bottom with send button
  - Auto-greeting on first open: "Welcome to Masqati! How can I help you today?"
  - Messages rendered with `react-markdown` for formatted AI responses
  - Loading indicator while waiting for response
  - Conversation history maintained in state (reset on close or with a "New Chat" button)
- Premium styling: glass effect background, pink-gold send button, serif font for assistant name

**3. Update `src/pages/Index.tsx`**
- Import and render `ChatAssistant` component

**4. Update `src/components/BottomNav.tsx`**
- Add a chat/message icon button alongside favorites and cart
- Or keep ChatAssistant as a separate floating button positioned above the bottom nav

### Design
- Chat icon: `MessageCircle` from lucide-react, pink-gold gradient circle, pulsing animation
- Drawer: Full height on mobile, 400px wide panel on desktop
- Assistant messages: Light card with subtle gold left border (matching product cards)
- User messages: Pink-gold gradient bubble with white text
- Input: Rounded-full, gold focus ring, pink-gold send button

### System Prompt
The complete menu data provided by the user will be hardcoded in the edge function as the system message -- ensuring accurate, grounded responses.

### Technical Notes
- Uses `LOVABLE_API_KEY` (pre-set in environment) for AI gateway calls
- Model: `google/gemini-2.5-flash` (fast, cost-effective for menu Q&A)
- No database needed -- conversation is in-memory per session
- Install `react-markdown` for rendering AI responses

