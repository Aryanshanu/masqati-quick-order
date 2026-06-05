import { Heart, Plus, Trash2, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useFavorites } from "@/context/FavoritesContext";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

interface FavoritesListProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FavoritesList = ({ open, onOpenChange }: FavoritesListProps) => {
  const { favorites, removeFromFavorites, clearFavorites } = useFavorites();
  const { addToCart } = useCart();

  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-background border-0">
        <SheetHeader className="border-b border-border/50 pb-4">
          <SheetTitle className="font-display text-xl flex items-center gap-2 font-bold">
            <Heart className="h-5 w-5 text-destructive fill-destructive" />
            Favorites
          </SheetTitle>
        </SheetHeader>

        {favoriteProducts.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-16">
            <p className="text-4xl mb-3">❤️</p>
            <p className="text-muted-foreground font-body text-sm">No favorites yet</p>
            <p className="text-xs text-muted-foreground/50 font-body mt-1">
              Tap the heart icon to save products
            </p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-2.5 py-4">
                {favoriteProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 p-3 bg-card rounded-2xl shadow-sm animate-fade-in"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-sm text-foreground truncate font-semibold">
                        {product.name}
                      </h4>
                      <span className="text-[11px] text-muted-foreground font-body">
                        {product.packSize}
                      </span>
                      <p className="text-gold font-display font-bold mt-0.5">
                        ₹{product.mrp}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Button
                        size="sm"
                        onClick={() => addToCart(product)}
                        className="pink-gold-gradient text-white hover:opacity-90 rounded-full font-body font-semibold text-xs active:scale-95 border-0 shadow-sm h-8"
                      >
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => removeFromFavorites(product.id)}
                        className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10 active:scale-90"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-border/50 pt-4 mt-auto">
              <Button
                variant="outline"
                onClick={clearFavorites}
                className="w-full text-destructive hover:bg-destructive/10 hover:text-destructive border-0 bg-secondary rounded-full"
              >
                <Trash2 className="h-3.5 w-3.5 mr-2" />
                Clear All
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default FavoritesList;
