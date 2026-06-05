import { useMemo, useRef, useEffect } from "react";
import { categories, products, getProductsByCategory, getSubcategoriesForCategory, getProductsBySubcategory } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductListProps {
  activeCategory: string;
  searchQuery: string;
  onCategoryInView: (categoryId: string) => void;
}

const ProductList = ({ activeCategory, searchQuery, onCategoryInView }: ProductListProps) => {
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return null;
    }
    const query = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.packSize.toLowerCase().includes(query) ||
        product.subcategory.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  useEffect(() => {
    if (!searchQuery && categoryRefs.current[activeCategory]) {
      categoryRefs.current[activeCategory]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    if (searchQuery.trim()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;
        const nextCategory = (visibleEntry.target as HTMLDivElement).dataset.categoryId;
        if (nextCategory) onCategoryInView(nextCategory);
      },
      {
        rootMargin: "-32% 0px -50% 0px",
        threshold: [0.2, 0.45, 0.7],
      }
    );

    categories.forEach((category) => {
      const element = categoryRefs.current[category.id];
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [searchQuery, onCategoryInView]);

  if (filteredProducts) {
    return (
      <div id="product-list" className="container mx-auto px-4 pb-32">
        <div className="mb-5">
          <h2 className="font-display text-xl text-foreground font-bold">
            Search Results
          </h2>
          <span className="inline-block mt-1 px-2.5 py-0.5 bg-secondary rounded-full text-muted-foreground text-xs font-body font-medium">
            {filteredProducts.length} found
          </span>
        </div>
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-muted-foreground font-body text-sm">
              No products found for "{searchQuery}"
            </p>
          </div>
        ) : (
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div id="product-list" className="container mx-auto px-4 pb-32">
      {categories.map((category) => {
        const categoryProducts = getProductsByCategory(category.id);
        if (categoryProducts.length === 0) return null;

        const subcategories = getSubcategoriesForCategory(category.id);

        return (
          <div
            key={category.id}
            id={`category-${category.id}`}
            data-category-id={category.id}
            ref={(el) => (categoryRefs.current[category.id] = el)}
            className="mb-10 scroll-mt-[140px]"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{category.icon}</span>
                <div>
                  <h2 className="font-display text-xl text-foreground font-bold">
                    {category.name}
                  </h2>
                  <div className="h-[2.5px] w-10 pink-gold-gradient mt-1 rounded-full" />
                </div>
              </div>
              <span className="px-2.5 py-0.5 bg-secondary rounded-full text-muted-foreground text-xs font-body font-medium">
                {categoryProducts.length}
              </span>
            </div>

            {/* Subcategories */}
            {subcategories.map((subcategory) => {
              const subcatProducts = getProductsBySubcategory(category.id, subcategory);
              if (subcatProducts.length === 0) return null;

              return (
                <div key={subcategory} className="mb-7">
                  {/* Subcategory Header */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-[3px] h-4 pink-gold-gradient rounded-full" />
                    <h3 className="font-body text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                      {subcategory}
                    </h3>
                    <span className="text-muted-foreground/50 text-[10px] font-body">
                      {subcatProducts.length}
                    </span>
                  </div>

                  {/* Products Grid - 2 col mobile */}
                  <div className="grid gap-3 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {subcatProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
