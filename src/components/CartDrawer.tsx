import { Minus, Plus, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCheckout: () => void;
}

const CartDrawer = ({ open, onOpenChange, onCheckout }: CartDrawerProps) => {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();

  const cartTotal = items.reduce(
    (sum, item) => sum + (item.product.salePrice ?? item.product.mrp) * item.quantity,
    0
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl bg-background border-t-0">
        <SheetHeader className="border-b border-border/50 pb-3">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-display text-xl font-bold">Your Cart</SheetTitle>
            {items.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCart}
                className="text-destructive hover:text-destructive hover:bg-destructive/10 font-body h-9 text-xs active:scale-95"
              >
                <Trash2 className="h-3.5 w-3.5 mr-1" />
                Clear
              </Button>
            )}
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-3 max-h-[calc(85vh-200px)]">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-3">🛒</p>
              <p className="text-muted-foreground font-body text-sm">
                Your cart is empty
              </p>
              <p className="text-muted-foreground/50 font-body text-xs mt-1">
                Add some delicious products!
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3 bg-card rounded-2xl p-3 shadow-sm animate-fade-in"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-sm text-foreground truncate font-semibold">
                      {item.product.name}
                    </h4>
                    <p className="text-muted-foreground text-[11px] font-body">
                      {item.product.packSize} · ₹{item.product.salePrice ?? item.product.mrp}
                    </p>
                  </div>

                  <div className="flex items-center gap-0.5 bg-secondary rounded-full px-1 py-0.5">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="h-7 w-7 rounded-full active:scale-90"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="font-body font-bold w-5 text-center text-xs">
                      {item.quantity}
                    </span>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="h-7 w-7 rounded-full active:scale-90"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  <p className="font-display text-sm text-gold font-bold min-w-[48px] text-right">
                    ₹{(item.product.salePrice ?? item.product.mrp) * item.quantity}
                  </p>

                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => removeFromCart(item.product.id)}
                    className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10 active:scale-90"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border/50 pt-3 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-display text-lg font-bold">Total</span>
              <span className="font-display text-xl text-gold font-bold">
                ₹{cartTotal}
              </span>
            </div>

            <Button
              onClick={onCheckout}
              className="w-full h-12 pink-gold-gradient text-white hover:opacity-90 rounded-full font-body text-sm font-bold active:scale-[0.98] transition-transform shadow-lg border-0"
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
