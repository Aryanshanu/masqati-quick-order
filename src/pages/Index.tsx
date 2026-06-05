import { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import { FavoritesProvider } from "@/context/FavoritesContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TopPicks from "@/components/TopPicks";
import CategoryNav from "@/components/CategoryNav";
import SearchBar from "@/components/SearchBar";
import ProductList from "@/components/ProductList";
import BottomNav from "@/components/BottomNav";
import CartDrawer from "@/components/CartDrawer";
import FavoritesList from "@/components/FavoritesList";
import CheckoutForm from "@/components/CheckoutForm";

const IndexContent = () => {
  const [activeCategory, setActiveCategory] = useState("ice-cream");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      <HeroSection />
      <TopPicks />
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={(id) => {
          setActiveCategory(id);
          setSearchQuery("");
        }}
      />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <ProductList
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onCategoryInView={setActiveCategory}
      />
      <BottomNav
        onCartClick={() => setIsCartOpen(true)}
        onFavoritesClick={() => setIsFavoritesOpen(true)}
      />
      <CartDrawer
        open={isCartOpen}
        onOpenChange={setIsCartOpen}
        onCheckout={handleCheckout}
      />
      <FavoritesList open={isFavoritesOpen} onOpenChange={setIsFavoritesOpen} />
      <CheckoutForm open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen} />
    </div>
  );
};

const Index = () => {
  return (
    <CartProvider>
      <FavoritesProvider>
        <IndexContent />
      </FavoritesProvider>
    </CartProvider>
  );
};

export default Index;
