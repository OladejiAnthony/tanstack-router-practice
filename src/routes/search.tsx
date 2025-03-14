//Query Parameters & Validation
import { createFileRoute } from "@tanstack/react-router";
//import * as v from "valibot";

//defining types and default values
type ItemFilters = {
  query: string;
  hasDiscount: boolean;
  categories: Category[];
};

type Category = "electronics" | "clothing" | "books" | "toys";

//"valibot" validation library just like "zod"
// const Category = v.union([
//   v.literal("electronics"),
//   v.literal("clothing"),
//   v.literal("books"),
//   v.literal("toys"),
// ]);

// const ItemFilters = v.object({
//   query: v.optional(v.string()),
//   hasDiscount: v.optional(v.boolean()),
//   categories: v.optional(v.array(Category)),
// });

// type ItemFilters = v.infer<typeof ItemFilters>;

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>): ItemFilters => {
    console.log("Raw search params:", search); // Debugging line

    return {
      query: (search.query as string) || "", // Default to empty string if undefined
      hasDiscount: search.hasDiscount === "true", // Ensure it's a boolean
      categories:
        typeof search.categories === "string"
          ? ((search.categories as string).split(",") as Category[]) // Convert string to array
          : Array.isArray(search.categories)
            ? (search.categories as Category[]) // Use it directly if it's already an array
            : [], // Default to an empty array if undefined
    };
  },
  component: SearchComponent,
});

function SearchComponent() {
  const { query, hasDiscount, categories } = Route.useSearch();
  console.log({ query, hasDiscount, categories });
  return (
    <>
      <h1>Search Results</h1>
      <p>Query: {query}</p>
      <p>Has Discount: {hasDiscount ? "Yes" : "No"}</p>
      <p>Categories: {categories.join(", ")}</p>
      <pre>{JSON.stringify({ query, hasDiscount, categories }, null, 2)}</pre>
    </>
  );
}
