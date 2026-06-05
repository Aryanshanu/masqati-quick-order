# Masqati Pocharam

Premium ice cream, dairy products, namkeens & food menu catalogue for Masqati - Pocharam, Ghatkesar.

## Tech Stack

- **Vite** - Build tool
- **TypeScript** - Type safety
- **React** - UI framework
- **shadcn/ui** - Component library
- **Tailwind CSS** - Styling
- **Supabase** - Backend (Edge Functions for chat assistant)

## Getting Started

```sh
# Clone the repository
git clone https://github.com/Aryanshanu/masquati-pocharam.git

# Navigate to the project directory
cd masquati-pocharam

# Install dependencies
npm install

# Create .env file with required environment variables
cp .env.example .env

# Start the development server
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory with:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
VITE_SUPABASE_PROJECT_ID=your_project_id
```

## Features

- Product catalogue with categories and subcategories
- Shopping cart with WhatsApp checkout
- AI-powered chat assistant for menu queries
- Geolocation-based address detection
- Favorites list
- Mobile-first responsive design
