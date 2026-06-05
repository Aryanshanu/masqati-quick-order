import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryNav = ({ activeCategory, onCategoryChange }: CategoryNavProps) => {
  return (
    <nav className="sticky top-[86px] z-40 glass-effect border-b border-border/60 shadow-sm">
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex gap-1.5 overflow-x-auto scrollbar-hide pb-0.5 snap-x snap-mandatory justify-start sm:justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 font-body text-xs font-semibold snap-start active:scale-95 relative border border-border/40",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground font-bold shadow-md"
                  : "bg-card/70 text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <span className="text-sm">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
