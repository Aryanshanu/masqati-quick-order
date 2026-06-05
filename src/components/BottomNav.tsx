import { ShoppingCart, Heart, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";

interface BottomNavProps {
  onCartClick: () => void;
  onFavoritesClick: () => void;
}

const BottomNav = ({ onCartClick, onFavoritesClick }: BottomNavProps) => {
  const { totalItems, totalAmount } = useCart();
  const { favorites } = useFavorites();
  const favCount = favorites.length;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 safe-area-bottom">
      <div className="max-w-md mx-auto">
        <div className="flex items-center gap-2.5 glass-effect rounded-full px-2.5 py-2 floating-shadow border border-border/50">
          {/* Favorites Button */}
          <button
            onClick={onFavoritesClick}
            className="relative flex items-center justify-center h-10 w-10 rounded-full bg-card hover:bg-secondary active:scale-95 transition-all shadow-sm"
            aria-label="View favorites"
          >
            <Heart className={`h-4 w-4 ${favCount > 0 ? 'text-destructive fill-destructive' : 'text-muted-foreground'}`} />
            {favCount > 0 && (
              <span className="absolute -top-1 -right-1 pink-gradient text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {favCount > 9 ? "9+" : favCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className={`flex-1 flex items-center justify-between h-10 rounded-full px-4 active:scale-[0.98] transition-all font-body ${
              totalItems > 0
                ? 'pink-gold-gradient text-white shadow-sm'
                : 'bg-card text-muted-foreground'
            }`}
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              <span className="font-semibold text-xs">
                {totalItems > 0 ? `${totalItems} items` : 'Cart empty'}
              </span>
            </div>
            {totalItems > 0 && (
              <div className="flex items-center gap-1">
                <span className="font-display font-bold text-sm">₹{totalAmount}</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
