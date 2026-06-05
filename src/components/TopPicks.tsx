import { Plus, Heart } from "lucide-react";
import { featuredProducts, getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";

const collectionColors: Record<string, string> = {
  "☀️ Summer Specials": "from-gold/15 to-pink/15",
  "⭐ Masqati Specials": "from-pink/15 to-gold/15",
  "🧒 Kids Favourites": "from-pink/20 to-primary/10",
};

const formatDisplayName = (name: string) =>
  name.replace(/\s+(cup|bucket|packet|pack|poly pack|tin|glass)$/i, "").trim();

const TopPicks = () => {
  const { addToCart, getItemQuantity } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-6 animate-fade-in">
          <h2 className="font-display text-2xl md:text-3xl text-foreground font-bold tracking-tight">
            Top Picks
          </h2>
          <div className="w-10 h-[3px] pink-gold-gradient mt-2 rounded-full" />
        </div>

        {/* Collections */}
        <div className="space-y-8">
          {Object.entries(featuredProducts).map(([collectionName, productIds]) => (
            <div key={collectionName} className="animate-fade-in-up">
              {/* Collection Label */}
              <h3 className="font-display text-base md:text-lg text-foreground mb-3 font-semibold">
                {collectionName}
              </h3>

              {/* Horizontal Scroll Row */}
              <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
                {productIds.map((id) => {
                  const product = getProductById(id);
                  if (!product) return null;
                  const favorited = isFavorite(product.id);
                  const inCart = getItemQuantity(product.id) > 0;

                  return (
                    <div
                      key={product.id}
                      className={`snap-start flex-shrink-0 w-[180px] rounded-2xl bg-gradient-to-br ${collectionColors[collectionName] || 'from-secondary to-muted/50'} p-3.5 relative card-hover border border-border/50`}
                    >
                      {/* Heart */}
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-card/80 backdrop-blur-sm transition-all active:scale-90 z-10"
                        aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
                      >
                        <Heart
                          className={`h-3.5 w-3.5 transition-all duration-200 ${
                            favorited
                              ? "text-destructive fill-destructive animate-heart-pop"
                              : "text-muted-foreground hover:text-destructive"
                          }`}
                        />
                      </button>

                      {/* Info */}
                      <div className="pr-7">
                        <h4 className="font-display text-sm font-semibold text-foreground leading-tight line-clamp-2">
                          {formatDisplayName(product.name)}
                        </h4>
                        <span className="inline-block mt-1.5 px-2 py-0.5 bg-card/60 backdrop-blur-sm rounded-full text-muted-foreground text-[10px] font-body font-medium">
                          {product.packSize}
                        </span>
                      </div>

                      {/* Price + Add */}
                      <div className="mt-3 flex items-center justify-between">
                        <p className="font-display text-lg text-gold font-bold">
                          ₹{product.salePrice || product.mrp}
                        </p>
                        <button
                          onClick={() => addToCart(product)}
                          className={`flex items-center justify-center w-8 h-8 rounded-full active:scale-90 transition-all shadow-sm ${
                            inCart
                              ? "bg-primary text-primary-foreground"
                              : "pink-gold-gradient text-white hover:opacity-90"
                          }`}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicks;
