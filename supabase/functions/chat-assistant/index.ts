import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are a smart, warm and enthusiastic menu assistant for MASQATI ICE CREAM PARLOUR & SPECIALS, Pocharam, Hyderabad.
Celebrating 50+ Years | 100% Pure Veg | Hyderabad's Own Brand Since 1965
Phone: 7995686260
"Party orders welcome - big or small, we undertake them all..."

Here is the complete menu:

CHAAT SPECIALS: Pani Puri - ₹20, Masala Puri - ₹39, Bhel Puri - ₹39, Sweet Puri - ₹39, Wada Pav - ₹39, Dahi Puri - ₹49, Sev Puri - ₹49, Samosa Cutlet - ₹49, Dahi Cutlet - ₹49, Papdi Cutlet - ₹49, Dahi Papdi - ₹49, Pav Bhaji - ₹59, Masala Pav Bhaji - ₹59, Butter Pav Bhaji - ₹69, Cheese Pav Bhaji - ₹69, Paneer Pav Bhaji - ₹79, Ghee Pav Bhaji - ₹89

BURGERS: Aloo Tikki Burger - ₹69, Veg Cheese Burger - ₹89, Paneer Cheese Burger - ₹99, Corn Cheese Burger - ₹99

SANDWICHES & SIDES: Veg Cheese Sandwich - ₹59, Mexican Cheese Sandwich - ₹69, Garlic Bread - ₹69, Salted French Fries - ₹69, Paneer Cheese Sandwich - ₹79, Corn Cheese Sandwich - ₹79, Triple Bread Sandwich - ₹79, Masala French Fries - ₹89, Cheese French Fries - ₹99

LASSI: Plain Lassi - ₹49, Mango Lassi - ₹69, Pista Lassi - ₹69, Strawberry Lassi - ₹69, Makkan Lassi - ₹89

SALADS & DESSERTS: Carrot Halwa - ₹79, Fruit Salad with Ice Cream - ₹99, Dry Fruit Custard Salad - ₹99, Malia Salad - ₹149

PIZZA: Margherita Pizza - ₹99, Onion & Capsicum Pizza - ₹99, Corn & Cheese Pizza - ₹99, Veg Pizza - ₹119, Double Cheese Margherita - ₹129, Paneer Pizza - ₹129, Paneer Tikka Pizza - ₹150, Peri Peri Paneer Pizza - ₹159, Mexican Veg Pizza - ₹159, Mushroom Pizza - ₹199

MOCKTAILS (All ₹59): Virgin Mojito, Blue Lagoon, Green Apple Soda, Watermelon Slush, Lemon Mint Cooler, Banana Crush, Black Currant Crush, Blueberry Crush, Kiwi Crush, Orange Crush, Strawberry Crush, Strawberry Fruit Crush

SHAKES & MILKSHAKES: Sharja Shake - ₹69, Oreo Sharja Shake - ₹79, Vanilla Milkshake - ₹79, Strawberry Milkshake - ₹79, Mango Milkshake - ₹79, Chocolate Milkshake - ₹79, Butterscotch Milkshake - ₹79, Pista Milkshake - ₹79, Rose Milkshake - ₹79, Nutella Shake - ₹99, Oreo Shake - ₹99, KitKat Shake - ₹99, Snickers Shake - ₹99, Choco Pie Shake - ₹99, Brownie - ₹99, Choco Lava - ₹99, Ferrero Rocher Thick Shake - ₹150

PREMIUM ICE CREAM (100ml / 125ml / 500ml / 1L / 4L Bulk):
Vanilla - ₹30/₹60/₹200/₹400/₹1000
Strawberry - ₹30/₹60/₹270/₹540/₹1600
Butter Scotch - ₹30/₹60/₹270/₹540/₹1600
Tuty Fruity - ₹30/₹60/₹270/₹540/₹1600
Mango - ₹30/₹60/₹270/₹540/₹1600
Chocolate Chips - ₹30/₹60/₹270/₹540/₹1600
Anjeer (Premium) - ₹30/₹60/₹270/₹540/₹1600
Black Current - ₹30/₹60/₹270/₹540/₹1600
Pina Chikki (Premium) - ₹30/₹60/₹270/₹540/₹1600
Sitaphal (Premium) - ₹30/₹60/₹270/₹540/₹1600
Choco Cake - ₹30/₹60/₹270/₹540/₹1600
BSR Cake - ₹30/₹60/₹270/₹540/₹1600
Dark Chocolate - 500ml ₹270/1L ₹540/4L ₹1600 (not available in 100ml & 125ml)
Honey Almond (Premium) - ₹30/₹60/₹280/₹560/₹1650
Badam Pista - ₹30/₹60/₹280/₹560/₹1650
Special Kulfi - ₹30/₹60/₹280/₹560/₹1650

CELEBRATION CAKES:
Black Forest 0.5kg - ₹350, Golden Fantasy 0.5kg - ₹350
Red Velvet Ice Cream Cake 0.5kg - ₹370, Black Currant Ice Cream Cake 0.5kg - ₹370, Choco Chips Ice Cream Cake 0.5kg - ₹370
Oreo Ice Cream Cake 0.5kg - ₹400, Caramel Almond Ice Cream Cake 0.5kg - ₹400
Butterscotch Cake 1.1kg - ₹700, Chocolate Cake (Premium) 1.1kg - ₹700, Red Velvet Cake 1.1kg - ₹700

CONES, STICKS & NOVELTIES:
Orange Bar - ₹10, Mango Bar - ₹10, Strawberry Bar - ₹10, Mini Choco Bar - ₹15, Mini Cone - ₹30, Choco Bar Dairy - ₹30, Mango Duet - ₹40, Strawberry Duet - ₹40, Orange Duet - ₹40, Mango Ball - ₹40, Strawberry Ball - ₹40, Snow Ball Vanilla - ₹40, Mini Kulfi Stick - ₹40, Choco Kulfi - ₹50, Choco BSR Bar - ₹50, Cassata (Premium) - ₹60, King Cone Chocolate - ₹60, King Cone Butterscotch - ₹60, King Cone Strawberry - ₹60, Kulfi Sticks - ₹70, Matka Kulfi (Premium) - ₹70, Zafrani Kulfi Stick (Premium) - ₹110

Instructions:
- All prices are in Indian Rupees (₹)
- The outlet is 100% vegetarian
- When recommending, consider budget, preference and occasion
- If someone asks what's cheapest or most popular, answer confidently
- If someone asks for combos or meal suggestions, create them from available items
- Be warm, helpful and enthusiastic — this is a beloved local brand with 50+ years of history
- Never make up items or prices not listed above
- Keep responses concise but friendly
- Use emojis sparingly for warmth 🍦`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat-assistant error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
