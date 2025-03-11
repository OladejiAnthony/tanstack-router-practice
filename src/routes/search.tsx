//Query Parameters & Validation
import { createFileRoute } from "@tanstack/react-router";

//defining types and default values
type ItemFilters = {
  query: string;
  hasDiscount: boolean;
  categories: Category[];
};

type Category = "electronics" | "clothing" | "books" | "toys";

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>): ItemFilters => {
    return {
      query: (search.query as string) || "", // Default to empty string if undefined
      hasDiscount: Boolean(search.hasDiscount), // Ensure it's a boolean
      categories:
        typeof search.categories === "string"
          ? ((search.categories as string).split(",") as Category[])
          : [], // Default to an empty array if undefined
    };
  },
  component: SearchComponent,
});

function SearchComponent() {
  const { query, hasDiscount, categories } = Route.useSearch();
  console.log({ query });
  return (
    <>
      <h1>Search Results</h1>
      <p>Query:  {query}</p>
      <p>Has Discount: {hasDiscount ? "Yes" : "No"}</p>
      {/* <p>Categories: {categories.join(", ")}</p> */}
      <pre>{JSON.stringify({ query, hasDiscount, categories }, null, 2)}</pre>
    </>
  );
}
