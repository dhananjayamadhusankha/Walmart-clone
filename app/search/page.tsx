import Product from "@/components/Product";
import fetchSearch from "@/lib/fetchSearch";

type Props = {
  searchParams: {
    q: string;
  };
};

async function SearchPage({ searchParams: { q } }: Props) {
  const results = await fetchSearch(q);

  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl mb-2">Results for {q}</h1>
      <p className="mb-5 text-gray-400">
        ({results?.content.total_results} results)
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {results?.content.organic.map((prodcuct) => (
          <li key={prodcuct.product_id}>
            <Product product={prodcuct} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;
