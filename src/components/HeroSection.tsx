import { MapPin, ChevronDown } from "lucide-react";
import masqatiLogo from "@/assets/masqati-logo.png";
import { categories } from "@/data/products";
import { WHATSAPP_NUMBER, MAPS_URL } from "@/lib/constants";

const HeroSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Masqati! I'd like to place an order.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const scrollToCategory = (categoryId?: string) => {
    const el = document.getElementById(
      categoryId ? `category-${categoryId}` : "product-list"
    );
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden navy-gradient">
      {/* Subtle radial glow with pink */}
      <div className="absolute inset-0 opacity-40" style={{
        background: `radial-gradient(ellipse at 50% 100%, hsl(var(--pink) / 0.35) 0%, transparent 55%), radial-gradient(ellipse at 50% 0%, hsl(var(--gold) / 0.2) 0%, transparent 60%)`
      }} />

      <div className="relative container mx-auto px-4 pt-10 pb-6">
        <div className="flex flex-col items-center text-center gap-5 animate-fade-in">
          {/* Logo */}
          <img
            src={masqatiLogo}
            alt="Masqati - Premium Ice Creams & Dairy"
            className="h-20 md:h-28 w-auto object-contain drop-shadow-2xl"
          />

          {/* Tagline */}
          <div>
            <h1 className="font-display text-3xl md:text-5xl text-primary-foreground tracking-wide font-bold">
              MASQATI
            </h1>
            <p className="text-gold font-display text-lg md:text-xl italic mt-1 font-medium drop-shadow-[0_0_8px_hsl(38_65%_55%/0.4)]">
              50+ Years of Sweet Legacy
            </p>
          </div>

          {/* Description */}
          <p className="text-primary-foreground/85 font-body text-sm md:text-base max-w-md leading-relaxed">
            Premium ice creams, fresh dairy, authentic namkeens & our exclusive food menu.
          </p>

          {/* Location Pill */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 glass-effect border border-pink/30 rounded-full px-5 py-2.5 transition-all group hover:border-pink/50 active:scale-95"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <MapPin className="h-3.5 w-3.5 text-gold" />
            <span className="text-primary-foreground/90 font-body text-xs font-medium">
              Pocharam, Ghatkesar
            </span>
          </a>

          {/* CTA Buttons */}
          <div className="flex gap-3 mt-1">
            <button
              onClick={() => scrollToCategory()}
              className="pink-gold-gradient text-white font-body font-semibold text-sm px-7 py-3 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              Explore Menu
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-sm px-7 py-3 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order
            </button>
          </div>
        </div>

        {/* Instagram Story Highlights - Category Circles */}
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 scrollbar-hide justify-center">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className="flex flex-col items-center gap-1.5 flex-shrink-0 group"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="story-ring">
                <div className="story-ring-inner">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-navy-light flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                    {cat.icon}
                  </div>
                </div>
              </div>
              <span className="text-primary-foreground/90 font-body text-[10px] font-medium max-w-[64px] text-center leading-tight line-clamp-1">
                {cat.name}
              </span>
            </button>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-4">
          <button onClick={() => scrollToCategory()} className="animate-bounce text-pink/70 hover:text-pink transition-colors">
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
