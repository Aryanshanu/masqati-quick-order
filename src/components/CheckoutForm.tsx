import { useState } from "react";
import { MapPin, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_NUMBER } from "@/lib/constants";

interface CheckoutFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CheckoutForm = ({ open, onOpenChange }: CheckoutFormProps) => {
  const { items, clearCart } = useCart();
  const { toast } = useToast();
  
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});

  const cartTotal = items.reduce(
    (sum, item) => sum + (item.product.salePrice ?? item.product.mrp) * item.quantity,
    0
  );

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      toast({ title: "Location not supported", description: "Your browser doesn't support geolocation", variant: "destructive" });
      return;
    }
    setIsLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
          const data = await response.json();
          setLocation(data.display_name || `${latitude}, ${longitude}`);
          toast({ title: "Location detected", description: "Your location has been added" });
        } catch {
          setLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
        }
        setIsLoadingLocation(false);
      },
      () => {
        setIsLoadingLocation(false);
        toast({ title: "Location error", description: "Could not get your location.", variant: "destructive" });
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const validateForm = () => {
    const newErrors: { name?: string; contact?: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^[6-9]\d{9}$/.test(contact.replace(/\s/g, ""))) {
      newErrors.contact = "Please enter a valid 10-digit mobile number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    let message = `🛒 *New Order from Masqati Catalogue*\n\n`;
    message += `👤 *Customer Details*\n`;
    message += `Name: ${name}\nContact: +91 ${contact}\n`;
    if (address.trim()) message += `Address: ${address}\n`;
    if (location.trim()) message += `Location: ${location}\n`;
    message += `\n📦 *Order Items*\n`;
    items.forEach((item, index) => {
      const itemTotal = (item.product.salePrice ?? item.product.mrp) * item.quantity;
      message += `${index + 1}. ${item.product.name} (${item.product.packSize}) × ${item.quantity} = ₹${itemTotal}\n`;
    });
    message += `\n💰 *Total: ₹${cartTotal}*`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    clearCart();
    setName(""); setContact(""); setAddress(""); setLocation("");
    onOpenChange(false);
    toast({ title: "Order sent!", description: "Your order has been sent via WhatsApp" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md mx-4 rounded-3xl bg-background border-0 shadow-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-center font-bold">
            Complete Your Order
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="font-body font-medium text-xs">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => { setName(e.target.value); if (errors.name) setErrors({ ...errors, name: undefined }); }}
              className={`h-11 rounded-2xl font-body border-0 bg-secondary focus:ring-ring/50 shadow-sm ${errors.name ? "ring-2 ring-destructive" : ""}`}
            />
            {errors.name && <p className="text-destructive text-[11px] font-body">{errors.name}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="contact" className="font-body font-medium text-xs">
              Contact <span className="text-destructive">*</span>
            </Label>
            <div className="flex gap-2">
              <div className="flex items-center justify-center bg-secondary px-3 rounded-2xl text-muted-foreground font-body text-xs">
                +91
              </div>
              <Input
                id="contact"
                type="tel"
                placeholder="Mobile number"
                value={contact}
                onChange={(e) => { const v = e.target.value.replace(/\D/g, "").slice(0, 10); setContact(v); if (errors.contact) setErrors({ ...errors, contact: undefined }); }}
                className={`h-11 rounded-2xl font-body border-0 bg-secondary focus:ring-ring/50 shadow-sm ${errors.contact ? "ring-2 ring-destructive" : ""}`}
              />
            </div>
            {errors.contact && <p className="text-destructive text-[11px] font-body">{errors.contact}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="address" className="font-body font-medium text-xs">
              Address <span className="text-muted-foreground text-[10px]">(Optional)</span>
            </Label>
            <Textarea
              id="address"
              placeholder="Enter delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="min-h-[60px] rounded-2xl font-body resize-none border-0 bg-secondary focus:ring-ring/50 shadow-sm"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="location" className="font-body font-medium text-xs">
              Location <span className="text-muted-foreground text-[10px]">(Optional)</span>
            </Label>
            <div className="flex gap-2">
              <Input
                id="location"
                placeholder="Enter or detect"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="h-11 rounded-2xl font-body flex-1 border-0 bg-secondary focus:ring-ring/50 shadow-sm"
              />
              <Button
                type="button"
                variant="outline"
                onClick={handleGetLocation}
                disabled={isLoadingLocation}
                className="h-11 px-3 rounded-2xl border-0 bg-secondary shadow-sm"
              >
                {isLoadingLocation ? <Loader2 className="h-4 w-4 animate-spin" /> : <MapPin className="h-4 w-4 text-gold" />}
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-secondary rounded-2xl p-3.5 space-y-2 border border-gold/10">
            <div className="flex justify-between font-body text-[11px] text-muted-foreground">
              <span>{items.length} items</span>
              <span>{items.reduce((sum, item) => sum + item.quantity, 0)} units</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-display text-sm font-bold">Total</span>
              <span className="font-display text-lg text-gold font-bold">₹{cartTotal}</span>
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full h-12 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-body text-sm font-bold active:scale-[0.98] transition-transform shadow-lg border-0"
          >
            <Send className="h-4 w-4 mr-2" />
            Place Order via WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutForm;
