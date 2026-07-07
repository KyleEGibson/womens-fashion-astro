import { defineCollection, z } from "astro:content";

// category/subcategory are free-form strings (not an enum) because taxonomy
// varies per niche site — validate against the site's own category list in
// page code, not at the schema level.

const comparisonRow = z.object({
  name: z.string(),
  image: z.string(),
  price: z.string(),
  rating: z.number().min(0).max(5).optional(),
  bestFor: z.string().optional(),
  link: z.string(),
});

const reviews = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    productName: z.string(),
    brand: z.string(),
    category: z.string(),
    subcategory: z.string(),
    rating: z.number().min(0).max(5),
    price: z.string(),
    affiliateLink: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    author: z.string(),
    publishDate: z.date(),
    excerpt: z.string(),
    bestFor: z.array(z.string()),
    compatibility: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    keyIngredients: z.array(z.object({ name: z.string(), benefit: z.string() })),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
    comparisonPrices: z.array(z.object({ retailer: z.string(), price: z.string() })),
    alternatives: z.array(comparisonRow).optional(),
    tags: z.array(z.string()),
  }),
});

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    author: z.string(),
    publishDate: z.date(),
    image: z.string(),
    imageAlt: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()),
  }),
});

const guides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    author: z.string(),
    publishDate: z.date(),
    image: z.string(),
    imageAlt: z.string(),
    excerpt: z.string(),
    intro: z.string(),
    comparisonTable: z.array(comparisonRow),
    tags: z.array(z.string()),
  }),
});

export const collections = { reviews, articles, guides };
