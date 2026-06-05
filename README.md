# Masqati Quick Order

Product catalogue and quick order app for **Masqati Ice Cream Parlour & Specials**, Pocharam, Hyderabad.
Celebrating 50+ Years | 100% Pure Veg | Hyderabad's Own Brand Since 1965.

## Features

- Browse ice creams, chaats, shakes, pizzas, namkeens & more
- Category navigation and search
- Add to cart with quantity controls
- Favorites list
- WhatsApp checkout — fills a pre-formatted order message and opens WhatsApp directly
- Geolocation-based address detection at checkout
- Mobile-first responsive design

## Tech Stack

- **Vite** + **TypeScript** — build tool & type safety
- **React** — UI framework
- **shadcn/ui** — component library
- **Tailwind CSS** — styling

## Getting Started

```sh
# Clone the repository
git clone https://github.com/Aryanshanu/masqati-quick-order.git

# Navigate to the project directory
cd masqati-quick-order

# Install dependencies
npm install

# Start the development server
npm run dev
```

No environment variables required. The app runs entirely client-side.

## WhatsApp Order Flow

1. Customer browses the catalogue and adds items to cart
2. Taps **Proceed to Checkout**
3. Fills in name, contact, and optional address / auto-detected location
4. Taps **Place Order via WhatsApp**
5. WhatsApp opens with a pre-formatted order message sent to the store number
