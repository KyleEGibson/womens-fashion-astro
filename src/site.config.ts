export interface NavLink {
  label: string;
  href: string;
}

export interface CategoryTile {
  name: string;
  href: string;
  image: string;
}

export const siteConfig = {
  // Placeholder brand name — easy to rename later (just this file + favicon).
  brandName: "Muse & Thread",
  brandWords: ["Muse", "&", "Thread"] as [string, string, string],
  tagline: "Independent Fashion Reviews & Style Guides",
  heroHeadline: "Wardrobe pieces worth investing in, reviewed honestly",
  description:
    "Editorial reviews of clothing, shoes, handbags, and accessories — style guidance and honest quality assessments, not sponsored placements.",
  domain: "https://museandthread.example.com",

  googleFontsUrl:
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Clothing", href: "/category/clothing/" },
    { label: "Dresses", href: "/category/dresses/" },
    { label: "Shoes", href: "/category/shoes/" },
    { label: "Accessories", href: "/category/accessories/" },
    { label: "Jewelry", href: "/category/jewelry/" },
    { label: "Workwear", href: "/category/workwear/" },
    { label: "Seasonal Fashion", href: "/category/seasonal-fashion/" },
    { label: "Buying Guides", href: "/guides/" },
  ] as NavLink[],

  footerExploreLinks: [
    { label: "Clothing", href: "/category/clothing/" },
    { label: "Shoes", href: "/category/shoes/" },
    { label: "Accessories", href: "/category/accessories/" },
    { label: "All Reviews", href: "/reviews/" },
    { label: "Buying Guides", href: "/guides/" },
    { label: "Best Of Lists", href: "/best-of/" },
  ] as NavLink[],

  homepageCategories: [
    { name: "Clothing", href: "/category/clothing/", image: "/images/category-clothing.jpg" },
    { name: "Shoes", href: "/category/shoes/", image: "/images/category-shoes.jpg" },
    { name: "Accessories", href: "/category/accessories/", image: "/images/category-accessories.jpg" },
    { name: "Jewelry", href: "/category/jewelry/", image: "/images/category-jewelry.jpg" },
  ] as CategoryTile[],

  categoryTaxonomy: {
    "Clothing": ["Tops", "Bottoms", "Outerwear", "Loungewear"],
    "Dresses": ["Casual Dresses", "Work Dresses", "Occasion Dresses", "Maxi Dresses"],
    "Shoes": ["Sneakers", "Flats", "Boots", "Heels", "Sandals"],
    "Accessories": ["Handbags", "Belts", "Scarves", "Sunglasses"],
    "Jewelry": ["Necklaces", "Earrings", "Rings", "Bracelets"],
    "Workwear": ["Blazers", "Trousers", "Work Bags", "Office Shoes"],
    "Seasonal Fashion": ["Spring", "Summer", "Fall", "Winter"],
  } as Record<string, string[]>,

  hasAffiliateProgram: true,
};
