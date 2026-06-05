export interface Product {
  id: string;
  name: string;
  packSize: string;
  mrp: number;
  salePrice?: number;
  category: string;
  subcategory: string;
  badge?: 'bestseller' | 'hot' | 'new' | 'sale';
  validity?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "ice-cream", name: "Ice Creams", icon: "🍦" },
  { id: "food-menu", name: "Food Menu", icon: "🍽️" },
  { id: "drinks", name: "Drinks & Shakes", icon: "🥤" },
  { id: "namkeen", name: "Namkeens", icon: "🍿" },
  { id: "dairy", name: "Dairy & Fresh", icon: "🥛" },
  { id: "sweets-bakery", name: "Sweets & Bakery", icon: "🍪" },
];

export const subcategories: { [key: string]: string[] } = {
  "ice-cream": ["Ice Cream", "Ice Cream Cakes", "Sticks", "Novelties", "Cones", "Premium Sticks", "Bulk Ripples"],
  "food-menu": ["Chaat Specials", "Burgers", "Sandwiches & Sides", "Pizza"],
  "drinks": ["Mocktails", "Shakes & Milkshakes", "Lassi", "Flavoured Milk", "Buttermilk"],
  "namkeen": ["Namkeens", "Mini Snacks"],
  "dairy": ["Fresh Milk", "Long Life Milk", "Curd", "Ghee", "Paneer", "Khowa", "Butter", "Cream"],
  "sweets-bakery": ["Desserts", "Sweets", "Biscuits", "Cookies", "Bread"],
};

export const products: Product[] = [
  // ==================== CATEGORY 1: ICE CREAM CUPS ====================
  // Vanilla (4 sizes - removed 50ml)
  { id: "ic-vanilla-100ml", name: "Vanilla", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-vanilla-125ml", name: "Vanilla", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-vanilla-500ml", name: "Vanilla", packSize: "500ml", mrp: 200, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-vanilla-1l", name: "Vanilla", packSize: "1 Litre", mrp: 400, category: "ice-cream", subcategory: "Ice Cream", badge: "hot", validity: "180 Days" },
  
  // Strawberry (4 sizes)
  { id: "ic-strawberry-100ml", name: "Strawberry", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-strawberry-125ml", name: "Strawberry", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-strawberry-500ml", name: "Strawberry", packSize: "500ml", mrp: 250, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-strawberry-1l", name: "Strawberry", packSize: "1 Litre", mrp: 500, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  
  // Butter Scotch (4 sizes)
  { id: "ic-butterscotch-100ml", name: "Butter Scotch", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-butterscotch-125ml", name: "Butter Scotch", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-butterscotch-500ml", name: "Butter Scotch", packSize: "500ml", mrp: 250, category: "ice-cream", subcategory: "Ice Cream", badge: "bestseller", validity: "180 Days" },
  { id: "ic-butterscotch-1l", name: "Butter Scotch", packSize: "1 Litre", mrp: 500, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  
  // Green Pista (4 sizes)
  { id: "ic-greenpista-100ml", name: "Green Pista", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-greenpista-125ml", name: "Green Pista", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-greenpista-500ml", name: "Green Pista", packSize: "500ml", mrp: 250, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-greenpista-1l", name: "Green Pista", packSize: "1 Litre", mrp: 500, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  
  // Tuty Fruity (4 sizes)
  { id: "ic-tutyfruity-100ml", name: "Tuty Fruity", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-tutyfruity-125ml", name: "Tuty Fruity", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-tutyfruity-500ml", name: "Tuty Fruity", packSize: "500ml", mrp: 250, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-tutyfruity-1l", name: "Tuty Fruity", packSize: "1 Litre", mrp: 500, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  
  // Mango (4 sizes)
  { id: "ic-mango-100ml", name: "Mango", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-mango-125ml", name: "Mango", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-mango-500ml", name: "Mango", packSize: "500ml", mrp: 250, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-mango-1l", name: "Mango", packSize: "1 Litre", mrp: 500, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  
  // Choco Chips (4 sizes)
  { id: "ic-chocochips-100ml", name: "Choco Chips", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-chocochips-125ml", name: "Choco Chips", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-chocochips-500ml", name: "Choco Chips", packSize: "500ml", mrp: 250, category: "ice-cream", subcategory: "Ice Cream", badge: "hot", validity: "180 Days" },
  { id: "ic-chocochips-1l", name: "Choco Chips", packSize: "1 Litre", mrp: 500, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  
  // Honey Almond (4 sizes)
  { id: "ic-honeyalmond-100ml", name: "Honey Almond", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-honeyalmond-125ml", name: "Honey Almond", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-honeyalmond-500ml", name: "Honey Almond", packSize: "500ml", mrp: 280, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-honeyalmond-1l", name: "Honey Almond", packSize: "1 Litre", mrp: 560, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  
  // Anjeer (4 sizes)
  { id: "ic-anjeer-100ml", name: "Anjeer", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-anjeer-125ml", name: "Anjeer", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-anjeer-500ml", name: "Anjeer", packSize: "500ml", mrp: 250, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-anjeer-1l", name: "Anjeer", packSize: "1 Litre", mrp: 500, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  
  // Black Current (4 sizes)
  { id: "ic-blackcurrent-100ml", name: "Black Current", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-blackcurrent-125ml", name: "Black Current", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-blackcurrent-500ml", name: "Black Current", packSize: "500ml", mrp: 250, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },
  { id: "ic-blackcurrent-1l", name: "Black Current", packSize: "1 Litre", mrp: 500, category: "ice-cream", subcategory: "Ice Cream", validity: "180 Days" },

  // ==================== ICE CREAM CAKES ====================
  { id: "cake-butterscotch-1kg", name: "Butterscotch Round Cake", packSize: "1 Kg", mrp: 700, category: "ice-cream", subcategory: "Ice Cream Cakes", badge: "bestseller", validity: "6 Months" },
  { id: "cake-chocolate-1kg", name: "Chocolate Round Cake", packSize: "1 Kg", mrp: 700, category: "ice-cream", subcategory: "Ice Cream Cakes", badge: "hot", validity: "6 Months" },
  { id: "cake-redvelvet-1kg", name: "Red Velvet Round Cake", packSize: "1 Kg", mrp: 700, category: "ice-cream", subcategory: "Ice Cream Cakes", badge: "new", validity: "6 Months" },

  // ==================== STICKS (removed ₹10/₹15 items) ====================
  { id: "stick-chacobar-dairy", name: "Choco Bar", packSize: "1 pc", mrp: 30, category: "ice-cream", subcategory: "Sticks", validity: "6 Months" },
  { id: "stick-mango-duet", name: "Mango Duet", packSize: "1 pc", mrp: 40, category: "ice-cream", subcategory: "Sticks", validity: "6 Months" },
  { id: "stick-strawberry-duet", name: "Strawberry Duet", packSize: "1 pc", mrp: 40, category: "ice-cream", subcategory: "Sticks", validity: "6 Months" },

  // ==================== NOVELTIES ====================
  { id: "novelty-matka-kulfi", name: "Matka Kulfi", packSize: "1 pc", mrp: 70, category: "ice-cream", subcategory: "Novelties", badge: "bestseller", validity: "6 Months" },
  { id: "novelty-snowball-vanilla", name: "Snow Ball Vanilla", packSize: "1 pc", mrp: 40, category: "ice-cream", subcategory: "Novelties", validity: "6 Months" },
  { id: "novelty-plastic-cassata", name: "Cassata", packSize: "1 pc", mrp: 60, category: "ice-cream", subcategory: "Novelties", validity: "6 Months" },

  // ==================== CONES ====================
  { id: "cone-king-chocolate", name: "King Cone Chocolate", packSize: "1 pc", mrp: 60, category: "ice-cream", subcategory: "Cones", validity: "6 Months" },
  { id: "cone-king-butterscotch", name: "King Cone Butterscotch", packSize: "1 pc", mrp: 60, category: "ice-cream", subcategory: "Cones", validity: "6 Months" },

  // ==================== PREMIUM STICKS ====================
  { id: "premium-zafrani-kulfi", name: "Zafrani Kulfi Stick", packSize: "1 pc", mrp: 110, category: "ice-cream", subcategory: "Premium Sticks", badge: "hot", validity: "6 Months" },

  // ==================== BULK RIPPLES ====================
  { id: "ripple-mellojello-4l", name: "Mello Jello Bulk", packSize: "4 Litre", mrp: 1450, category: "ice-cream", subcategory: "Bulk Ripples", validity: "6 Months" },
  { id: "ripple-strawberry-4l", name: "Strawberry Ripple Bulk", packSize: "4 Litre", mrp: 1450, category: "ice-cream", subcategory: "Bulk Ripples", validity: "6 Months" },
  { id: "ripple-mango-4l", name: "Mango Ripple Bulk", packSize: "4 Litre", mrp: 1450, category: "ice-cream", subcategory: "Bulk Ripples", validity: "6 Months" },
  { id: "ripple-chocolate-4l", name: "Chocolate Ripple Bulk", packSize: "4 Litre", mrp: 1450, category: "ice-cream", subcategory: "Bulk Ripples", validity: "6 Months" },

  // ==================== CATEGORY 2: NAMKEENS ====================
  { id: "namkeen-makai-churva", name: "Makai Churva", packSize: "200g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-poha-churva", name: "Poha Churva", packSize: "200g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-barik-sev", name: "Barik Sev", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-masala-sev", name: "Masala Sev", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-chana-dal", name: "Chana Dal", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-masala-phalli", name: "Masala Phalli", packSize: "250g", mrp: 100, category: "namkeen", subcategory: "Namkeens", badge: "bestseller", validity: "3 Months" },
  { id: "namkeen-moong-dal", name: "Moong Dal", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-chana-moth", name: "Chana Moth", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-dal-moth", name: "Dal Moth", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-namak-para", name: "Namak Para", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-sweet-para", name: "Sweet Para", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-methi-stick", name: "Methi Stick", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-allinone-mixture", name: "All In One Mixture", packSize: "250g", mrp: 70, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },

  // ==================== MINI SNACKS ====================
  { id: "mini-makai-chiwda", name: "Makai Chiwda", packSize: "35g", mrp: 120, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-khatta-meetha", name: "Khatta Meetha", packSize: "35g", mrp: 120, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-yummy-peanuts", name: "Yummy Peanuts", packSize: "35g", mrp: 120, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-allinone", name: "All In One", packSize: "35g", mrp: 120, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-spicy-tomato-rings", name: "Spicy Tomato Rings", packSize: "17g", mrp: 60, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-spicy-wheels", name: "Spicy Wheels", packSize: "17g", mrp: 60, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-pasta-snack", name: "Pasta Snack", packSize: "17g", mrp: 60, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-happy-fries", name: "Happy Fries", packSize: "17g", mrp: 60, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-masala-phalli-pouch", name: "Masala Phalli Pouch", packSize: "35g", mrp: 120, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-moong-dal-pouch", name: "Moong Dal Pouch", packSize: "35g", mrp: 120, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-chana-moth-pouch", name: "Chana Moth Pouch", packSize: "35g", mrp: 120, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-dal-moth-pouch", name: "Dal Moth Pouch", packSize: "35g", mrp: 120, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },

  // ==================== CATEGORY 3: DAIRY ====================
  { id: "milk-whole-500ml", name: "Whole Milk", packSize: "500ml", mrp: 100, category: "dairy", subcategory: "Fresh Milk", validity: "48 Hours" },
  { id: "milk-whole-200ml", name: "Whole Milk", packSize: "200ml", mrp: 100, category: "dairy", subcategory: "Fresh Milk", validity: "48 Hours" },
  { id: "milk-toned-500ml", name: "Toned Milk", packSize: "500ml", mrp: 68, category: "dairy", subcategory: "Fresh Milk", validity: "48 Hours" },
  { id: "milk-toned-200ml", name: "Toned Milk", packSize: "200ml", mrp: 68, category: "dairy", subcategory: "Fresh Milk", validity: "48 Hours" },
  { id: "milk-tm-poly-500ml", name: "T.M. Poly Pack", packSize: "500ml", mrp: 68, category: "dairy", subcategory: "Long Life Milk", validity: "48 Hours" },
  { id: "milk-tm-poly-200ml", name: "T.M. Poly Pack", packSize: "200ml", mrp: 75, category: "dairy", subcategory: "Long Life Milk", validity: "48 Hours" },
  { id: "milk-tetra-whole-1l", name: "Tetra Pak Whole Milk", packSize: "1 Litre", mrp: 100, category: "dairy", subcategory: "Long Life Milk", validity: "90 Days" },
  { id: "milk-tetra-toned-1l", name: "Tetra Pak Toned Milk", packSize: "1 Litre", mrp: 80, category: "dairy", subcategory: "Long Life Milk", validity: "90 Days" },
  { id: "curd-wm-10kg-bucket", name: "WM Curd Bucket", packSize: "10 Kg", mrp: 1200, category: "dairy", subcategory: "Curd", validity: "7 Days" },
  { id: "curd-wm-1000ml-pkt", name: "WM Curd Packet", packSize: "1000ml", mrp: 120, category: "dairy", subcategory: "Curd", validity: "7 Days" },
  { id: "curd-wm-500ml-pkt", name: "WM Curd Packet", packSize: "500ml", mrp: 60, category: "dairy", subcategory: "Curd", validity: "7 Days" },
  { id: "curd-wm-400ml-cup", name: "WM Curd Cup", packSize: "400ml", mrp: 55, category: "dairy", subcategory: "Curd", validity: "10 Days" },
  { id: "curd-wm-200ml-cup", name: "WM Curd Cup", packSize: "200ml", mrp: 30, category: "dairy", subcategory: "Curd", validity: "10 Days" },
  { id: "curd-wm-100ml-cup", name: "WM Curd Cup", packSize: "100ml", mrp: 18, category: "dairy", subcategory: "Curd", validity: "10 Days" },
  { id: "curd-tm-bulk-20kg", name: "TM Curd Bulk", packSize: "20 Kg", mrp: 1800, category: "dairy", subcategory: "Curd", validity: "7 Days" },
  { id: "curd-tm-bulk-10kg", name: "TM Curd Bulk", packSize: "10 Kg", mrp: 900, category: "dairy", subcategory: "Curd", validity: "7 Days" },
  { id: "curd-tm-bucket-1000ml", name: "TM Curd Bucket", packSize: "1000ml", mrp: 100, category: "dairy", subcategory: "Curd", validity: "7 Days" },
  { id: "ghee-buffalo-fb-1000ml", name: "Buffalo Ghee FB", packSize: "1000ml", mrp: 760, category: "dairy", subcategory: "Ghee", badge: "bestseller", validity: "12 Months" },
  { id: "ghee-buffalo-fb-500ml", name: "Buffalo Ghee FB", packSize: "500ml", mrp: 380, category: "dairy", subcategory: "Ghee", validity: "12 Months" },
  { id: "ghee-buffalo-fb-200ml", name: "Buffalo Ghee FB", packSize: "200ml", mrp: 175, category: "dairy", subcategory: "Ghee", validity: "12 Months" },
  { id: "ghee-buffalo-fb-100ml", name: "Buffalo Ghee FB", packSize: "100ml", mrp: 86, category: "dairy", subcategory: "Ghee", validity: "12 Months" },
  { id: "ghee-buffalo-hb-1000ml", name: "Buffalo Ghee HB", packSize: "1000ml", mrp: 760, category: "dairy", subcategory: "Ghee", validity: "12 Months" },
  { id: "ghee-buffalo-hb-500ml", name: "Buffalo Ghee HB", packSize: "500ml", mrp: 380, category: "dairy", subcategory: "Ghee", validity: "12 Months" },
  { id: "ghee-cow-1000ml", name: "Pure Cow Ghee", packSize: "1000ml", mrp: 760, category: "dairy", subcategory: "Ghee", validity: "12 Months" },
  { id: "ghee-cow-500ml", name: "Pure Cow Ghee", packSize: "500ml", mrp: 380, category: "dairy", subcategory: "Ghee", validity: "12 Months" },

  // ==================== CATEGORY 4: OTHERS ====================
  { id: "paneer-1000g", name: "Paneer", packSize: "1000g", mrp: 480, category: "dairy", subcategory: "Paneer", validity: "15 Days" },
  { id: "paneer-500g", name: "Paneer", packSize: "500g", mrp: 240, category: "dairy", subcategory: "Paneer", validity: "15 Days" },
  { id: "paneer-200g", name: "Paneer", packSize: "200g", mrp: 96, category: "dairy", subcategory: "Paneer", validity: "15 Days" },
  { id: "khowa-1000g", name: "Khowa", packSize: "1000g", mrp: 500, category: "dairy", subcategory: "Khowa", validity: "10 Days" },
  { id: "khowa-500g", name: "Khowa", packSize: "500g", mrp: 250, category: "dairy", subcategory: "Khowa", validity: "10 Days" },
  { id: "khowa-200g", name: "Khowa", packSize: "200g", mrp: 100, category: "dairy", subcategory: "Khowa", validity: "10 Days" },
  { id: "butter-table-500g", name: "Table Butter", packSize: "500g", mrp: 250, category: "dairy", subcategory: "Butter", validity: "6 Months" },
  { id: "butter-table-100g", name: "Table Butter", packSize: "100g", mrp: 50, category: "dairy", subcategory: "Butter", validity: "6 Months" },
  { id: "butter-white-cooking-1kg", name: "White Cooking Butter", packSize: "1 Kg", mrp: 500, category: "dairy", subcategory: "Butter", validity: "3 Months" },
  { id: "cream-fresh-1000g", name: "Fresh Cream", packSize: "1000g", mrp: 500, category: "dairy", subcategory: "Cream", validity: "15 Days" },
  { id: "cream-tetra-1l", name: "Tetra Pak Cream", packSize: "1 Litre", mrp: 300, category: "dairy", subcategory: "Cream", validity: "120 Days" },
  { id: "fm-badam-glass", name: "FM Badam Glass", packSize: "200ml", mrp: 40, category: "drinks", subcategory: "Flavoured Milk", validity: "90 Days" },
  { id: "fm-badam-tin", name: "FM Badam Tin", packSize: "200ml", mrp: 50, category: "drinks", subcategory: "Flavoured Milk", validity: "180 Days" },
  { id: "lassi-plain", name: "Plain Lassi", packSize: "1 Glass", mrp: 49, category: "drinks", subcategory: "Lassi", validity: "7 Days" },
  { id: "beverage-mango-lassi", name: "Mango Lassi", packSize: "1 Glass", mrp: 69, category: "drinks", subcategory: "Lassi", validity: "7 Days" },
  { id: "lassi-pista", name: "Pista Lassi", packSize: "1 Glass", mrp: 69, category: "drinks", subcategory: "Lassi", validity: "7 Days" },
  { id: "lassi-strawberry", name: "Strawberry Lassi", packSize: "1 Glass", mrp: 69, category: "drinks", subcategory: "Lassi", validity: "7 Days" },
  { id: "lassi-makkan", name: "Makkan Lassi", packSize: "1 Glass", mrp: 89, category: "drinks", subcategory: "Lassi", validity: "7 Days" },
  { id: "beverage-sweet-lassi", name: "Sweet Lassi", packSize: "1 Glass", mrp: 49, category: "drinks", subcategory: "Lassi", validity: "7 Days" },
  { id: "beverage-butter-milk", name: "Butter Milk", packSize: "200ml", mrp: 20, category: "drinks", subcategory: "Buttermilk", validity: "7 Days" },
  { id: "dessert-carrot-halwa", name: "Carrot Halwa", packSize: "1 Bowl", mrp: 79, category: "sweets-bakery", subcategory: "Desserts", validity: "7 Days" },
  { id: "dessert-fruit-salad-ice-cream", name: "Fruit Salad with Ice Cream", packSize: "1 Bowl", mrp: 99, category: "sweets-bakery", subcategory: "Desserts", validity: "3 Days" },
  { id: "dessert-dry-fruit-custard", name: "Dry Fruit Custard Salad", packSize: "1 Bowl", mrp: 99, category: "sweets-bakery", subcategory: "Desserts", validity: "3 Days" },
  { id: "dessert-malia-salad", name: "Malia Salad", packSize: "1 Bowl", mrp: 149, category: "sweets-bakery", subcategory: "Desserts", validity: "3 Days" },
  { id: "sweet-doodh-peda", name: "Doodh Peda", packSize: "200g", mrp: 200, category: "sweets-bakery", subcategory: "Sweets", badge: "bestseller", validity: "7 Days" },
  { id: "sweet-fresh-rabdi", name: "Fresh Rabdi", packSize: "100g", mrp: 40, category: "sweets-bakery", subcategory: "Sweets", validity: "3 Days" },
  { id: "sweet-gulab-jamun", name: "Gulab Jamun Small", packSize: "1 box", mrp: 300, category: "sweets-bakery", subcategory: "Sweets", validity: "7 Days" },
  { id: "sweet-soan-papdi", name: "Soan Papdi", packSize: "200g", mrp: 90, category: "sweets-bakery", subcategory: "Sweets", validity: "3 Months" },
  { id: "biscuit-osmania", name: "Osmania Biscuits", packSize: "200g", mrp: 120, category: "sweets-bakery", subcategory: "Biscuits", validity: "3 Months" },
  { id: "biscuit-fruit-200g", name: "Fruit Biscuits", packSize: "200g", mrp: 120, category: "sweets-bakery", subcategory: "Biscuits", validity: "3 Months" },
  { id: "biscuit-fruit-400g", name: "Fruit Biscuits", packSize: "400g", mrp: 180, category: "sweets-bakery", subcategory: "Biscuits", validity: "3 Months" },
  { id: "biscuit-zeera", name: "Zeera Biscuits", packSize: "200g", mrp: 100, category: "sweets-bakery", subcategory: "Biscuits", validity: "3 Months" },
  { id: "cookie-kaju", name: "Kaju Biscuits", packSize: "200g", mrp: 150, category: "sweets-bakery", subcategory: "Cookies", validity: "3 Months" },
  { id: "cookie-badam", name: "Badam Biscuits", packSize: "200g", mrp: 150, category: "sweets-bakery", subcategory: "Cookies", validity: "3 Months" },
  { id: "cookie-pista", name: "Pista Biscuits", packSize: "200g", mrp: 150, category: "sweets-bakery", subcategory: "Cookies", validity: "3 Months" },
  { id: "bread-milk-400g", name: "Milk Bread", packSize: "400g", mrp: 50, category: "sweets-bakery", subcategory: "Bread", validity: "5 Days" },
  { id: "bread-milk-200g", name: "Milk Bread", packSize: "200g", mrp: 30, category: "sweets-bakery", subcategory: "Bread", validity: "5 Days" },
  { id: "bread-sandwich-800g", name: "Sandwich Bread", packSize: "800g", mrp: 80, category: "sweets-bakery", subcategory: "Bread", validity: "5 Days" },
  { id: "bread-pav", name: "Pav", packSize: "200g", mrp: 30, category: "sweets-bakery", subcategory: "Bread", validity: "5 Days" },
  { id: "bread-bun", name: "Bun", packSize: "90g", mrp: 15, category: "sweets-bakery", subcategory: "Bread", validity: "5 Days" },

  // ==================== CATEGORY 5: MASQATI SPECIALS ====================
  { id: "sp-pani-puri", name: "Pani Puri", packSize: "1 Plate", mrp: 20, category: "food-menu", subcategory: "Chaat Specials" },
  { id: "sp-dahi-puri", name: "Dahi Puri", packSize: "1 Plate", mrp: 49, category: "food-menu", subcategory: "Chaat Specials" },
  { id: "sp-sev-puri", name: "Sev Puri", packSize: "1 Plate", mrp: 49, category: "food-menu", subcategory: "Chaat Specials" },
  { id: "sp-masala-puri", name: "Masala Puri", packSize: "1 Plate", mrp: 39, category: "food-menu", subcategory: "Chaat Specials" },
  { id: "sp-bhel-puri", name: "Bhel Puri", packSize: "1 Plate", mrp: 39, category: "food-menu", subcategory: "Chaat Specials" },
  { id: "sp-sweet-puri", name: "Sweet Puri", packSize: "1 Plate", mrp: 39, category: "food-menu", subcategory: "Chaat Specials" },
  { id: "sp-samosa-cutlet", name: "Samosa Cutlet", packSize: "1 Plate", mrp: 49, category: "food-menu", subcategory: "Chaat Specials" },
  { id: "sp-dahi-cutlet", name: "Dahi Cutlet", packSize: "1 Plate", mrp: 49, category: "food-menu", subcategory: "Chaat Specials" },
  { id: "sp-papdi-cutlet", name: "Papdi Cutlet", packSize: "1 Plate", mrp: 49, category: "food-menu", subcategory: "Chaat Specials" },
  { id: "sp-dahi-papdi", name: "Dahi Papdi", packSize: "1 Plate", mrp: 49, category: "food-menu", subcategory: "Chaat Specials" },
  { id: "sp-wada-pav", name: "Wada Pav", packSize: "1 Piece", mrp: 39, category: "food-menu", subcategory: "Chaat Specials" },
  { id: "sp-pav-bhaji", name: "Pav Bhaji", packSize: "1 Plate", mrp: 59, category: "food-menu", subcategory: "Chaat Specials", badge: "bestseller" },
  { id: "sp-masala-pav-bhaji", name: "Masala Pav Bhaji", packSize: "1 Plate", mrp: 59, category: "food-menu", subcategory: "Chaat Specials" },
  { id: "sp-butter-pav-bhaji", name: "Butter Pav Bhaji", packSize: "1 Plate", mrp: 69, category: "food-menu", subcategory: "Chaat Specials" },
  { id: "sp-cheese-pav-bhaji", name: "Cheese Pav Bhaji", packSize: "1 Plate", mrp: 69, category: "food-menu", subcategory: "Chaat Specials", badge: "hot" },
  { id: "sp-aloo-tikki-burger", name: "Aloo Tikki Burger", packSize: "1 Piece", mrp: 69, category: "food-menu", subcategory: "Burgers" },
  { id: "sp-veg-cheese-burger", name: "Veg Cheese Burger", packSize: "1 Piece", mrp: 89, category: "food-menu", subcategory: "Burgers" },
  { id: "sp-paneer-cheese-burger", name: "Paneer Cheese Burger", packSize: "1 Piece", mrp: 99, category: "food-menu", subcategory: "Burgers", badge: "hot" },
  { id: "sp-corn-cheese-burger", name: "Corn Cheese Burger", packSize: "1 Piece", mrp: 99, category: "food-menu", subcategory: "Burgers" },
  { id: "sp-veg-cheese-sandwich", name: "Veg Cheese Sandwich", packSize: "1 Piece", mrp: 59, category: "food-menu", subcategory: "Sandwiches & Sides" },
  { id: "sp-bombay-masala-sandwich", name: "Bombay Masala Sandwich", packSize: "1 Piece", mrp: 69, category: "food-menu", subcategory: "Sandwiches & Sides" },
  { id: "sp-garlic-bread", name: "Garlic Bread", packSize: "1 Plate", mrp: 69, category: "food-menu", subcategory: "Sandwiches & Sides" },
  { id: "sp-paneer-cheese-sandwich", name: "Paneer Cheese Sandwich", packSize: "1 Piece", mrp: 79, category: "food-menu", subcategory: "Sandwiches & Sides" },
  { id: "sp-corn-cheese-sandwich", name: "Corn Cheese Sandwich", packSize: "1 Piece", mrp: 79, category: "food-menu", subcategory: "Sandwiches & Sides" },
  { id: "sp-triple-bread-sandwich", name: "Triple Bread Sandwich", packSize: "1 Piece", mrp: 79, category: "food-menu", subcategory: "Sandwiches & Sides" },
  { id: "sp-masala-french-fries", name: "Masala French Fries", packSize: "1 Plate", mrp: 89, category: "food-menu", subcategory: "Sandwiches & Sides", badge: "bestseller" },
  { id: "sp-cheese-corn-balls", name: "Cheese Corn Balls", packSize: "1 Plate", mrp: 99, category: "food-menu", subcategory: "Sandwiches & Sides" },
  { id: "sp-margherita-pizza", name: "Margherita Pizza", packSize: "1 Piece", mrp: 99, category: "food-menu", subcategory: "Pizza" },
  { id: "sp-onion-capsicum-pizza", name: "Onion & Capsicum Pizza", packSize: "1 Piece", mrp: 99, category: "food-menu", subcategory: "Pizza" },
  { id: "sp-corn-cheese-pizza", name: "Corn & Cheese Pizza", packSize: "1 Piece", mrp: 99, category: "food-menu", subcategory: "Pizza" },
  { id: "sp-veg-pizza", name: "Veg Pizza", packSize: "1 Piece", mrp: 119, category: "food-menu", subcategory: "Pizza" },
  { id: "sp-double-cheese-margherita", name: "Double Cheese Margherita", packSize: "1 Piece", mrp: 129, category: "food-menu", subcategory: "Pizza", badge: "hot" },
  { id: "sp-paneer-pizza", name: "Paneer Pizza", packSize: "1 Piece", mrp: 129, category: "food-menu", subcategory: "Pizza" },
  { id: "sp-paneer-tikka-pizza", name: "Paneer Tikka Pizza", packSize: "1 Piece", mrp: 150, category: "food-menu", subcategory: "Pizza" },
  { id: "sp-peri-peri-paneer-pizza", name: "Peri Peri Paneer Pizza", packSize: "1 Piece", mrp: 159, category: "food-menu", subcategory: "Pizza" },
  { id: "sp-mushroom-pizza", name: "Mushroom Pizza", packSize: "1 Piece", mrp: 199, category: "food-menu", subcategory: "Pizza", badge: "new" },
  { id: "sp-virgin-mojito", name: "Virgin Mojito", packSize: "1 Glass", mrp: 59, category: "drinks", subcategory: "Mocktails", badge: "bestseller" },
  { id: "sp-blue-lagoon", name: "Blue Lagoon", packSize: "1 Glass", mrp: 59, category: "drinks", subcategory: "Mocktails" },
  { id: "sp-green-apple-soda", name: "Green Apple Soda", packSize: "1 Glass", mrp: 59, category: "drinks", subcategory: "Mocktails" },
  { id: "sp-watermelon-slush", name: "Watermelon Slush", packSize: "1 Glass", mrp: 59, category: "drinks", subcategory: "Mocktails" },
  { id: "sp-peach-iced-tea", name: "Peach Iced Tea", packSize: "1 Glass", mrp: 59, category: "drinks", subcategory: "Mocktails" },
  { id: "sp-lemon-mint-cooler", name: "Lemon Mint Cooler", packSize: "1 Glass", mrp: 59, category: "drinks", subcategory: "Mocktails" },
  { id: "sp-spiced-guava", name: "Spiced Guava", packSize: "1 Glass", mrp: 59, category: "drinks", subcategory: "Mocktails" },
  { id: "sp-banana-crush", name: "Banana Crush", packSize: "1 Glass", mrp: 59, category: "drinks", subcategory: "Mocktails" },
  { id: "sp-black-currant-crush", name: "Black Currant Crush", packSize: "1 Glass", mrp: 59, category: "drinks", subcategory: "Mocktails" },
  { id: "sp-blueberry-crush", name: "Blueberry Crush", packSize: "1 Glass", mrp: 59, category: "drinks", subcategory: "Mocktails" },
  { id: "sp-kiwi-crush", name: "Kiwi Crush", packSize: "1 Glass", mrp: 59, category: "drinks", subcategory: "Mocktails" },
  { id: "sp-orange-crush", name: "Orange Crush", packSize: "1 Glass", mrp: 59, category: "drinks", subcategory: "Mocktails" },
  { id: "sp-strawberry-crush", name: "Strawberry Crush", packSize: "1 Glass", mrp: 59, category: "drinks", subcategory: "Mocktails" },
  { id: "sp-strawberry-fruit-crush", name: "Strawberry Fruit Crush", packSize: "1 Glass", mrp: 59, category: "drinks", subcategory: "Mocktails" },
  { id: "sp-shana-shake", name: "Shana Shake", packSize: "1 Glass", mrp: 69, category: "drinks", subcategory: "Shakes & Milkshakes" },
  { id: "sp-oreo-shana-shake", name: "Oreo Shana Shake", packSize: "1 Glass", mrp: 79, category: "drinks", subcategory: "Shakes & Milkshakes" },
  { id: "sp-vanilla-milkshake", name: "Vanilla Milkshake", packSize: "1 Glass", mrp: 79, category: "drinks", subcategory: "Shakes & Milkshakes" },
  { id: "sp-strawberry-milkshake", name: "Strawberry Milkshake", packSize: "1 Glass", mrp: 79, category: "drinks", subcategory: "Shakes & Milkshakes" },
  { id: "sp-mango-milkshake", name: "Mango Milkshake", packSize: "1 Glass", mrp: 79, category: "drinks", subcategory: "Shakes & Milkshakes" },
  { id: "sp-chocolate-milkshake", name: "Chocolate Milkshake", packSize: "1 Glass", mrp: 79, category: "drinks", subcategory: "Shakes & Milkshakes" },
  { id: "sp-butterscotch-milkshake", name: "Butterscotch Milkshake", packSize: "1 Glass", mrp: 79, category: "drinks", subcategory: "Shakes & Milkshakes" },
  { id: "sp-pista-milkshake", name: "Pista Milkshake", packSize: "1 Glass", mrp: 79, category: "drinks", subcategory: "Shakes & Milkshakes" },
  { id: "sp-rose-milkshake", name: "Rose Milkshake", packSize: "1 Glass", mrp: 79, category: "drinks", subcategory: "Shakes & Milkshakes" },
  { id: "sp-nutella-shake", name: "Nutella Shake", packSize: "1 Glass", mrp: 99, category: "drinks", subcategory: "Shakes & Milkshakes", badge: "hot" },
  { id: "sp-oreo-shake", name: "Oreo Shake", packSize: "1 Glass", mrp: 99, category: "drinks", subcategory: "Shakes & Milkshakes" },
  { id: "sp-kitkat-shake", name: "KitKat Shake", packSize: "1 Glass", mrp: 99, category: "drinks", subcategory: "Shakes & Milkshakes" },
  { id: "sp-snickers-shake", name: "Snickers Shake", packSize: "1 Glass", mrp: 99, category: "drinks", subcategory: "Shakes & Milkshakes" },
  { id: "sp-choco-pie-shake", name: "Choco Pie Shake", packSize: "1 Glass", mrp: 99, category: "drinks", subcategory: "Shakes & Milkshakes" },
  { id: "sp-ferrero-rocher-shake", name: "Ferrero Rocher Thick Shake", packSize: "1 Glass", mrp: 150, category: "drinks", subcategory: "Shakes & Milkshakes", badge: "new" },
];

// Helper functions
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.category === categoryId);
};

export const getProductsBySubcategory = (categoryId: string, subcategory: string): Product[] => {
  return products.filter((product) => product.category === categoryId && product.subcategory === subcategory);
};

export const getSubcategoriesForCategory = (categoryId: string): string[] => {
  const categoryProducts = getProductsByCategory(categoryId);
  return [...new Set(categoryProducts.map(p => p.subcategory))];
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const featuredProducts: Record<string, string[]> = {
  "☀️ Summer Specials": ["ic-mango-500ml", "sp-watermelon-slush", "sp-lemon-mint-cooler", "sp-strawberry-milkshake"],
  "⭐ Masqati Specials": ["sp-pani-puri", "sp-pav-bhaji", "sp-double-cheese-margherita", "sp-ferrero-rocher-shake"],
  "🧒 Kids Favourites": ["stick-chacobar-dairy", "ic-vanilla-100ml", "sp-oreo-shake"],
};
