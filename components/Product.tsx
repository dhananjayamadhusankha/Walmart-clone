import { Organic } from "@/typings/searchTypings";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

function Product({ product }: { product: Organic }) {
  return (
    <Link className="flex flex-col relative p-5 border rounded-xl h-full"
      href={{
        pathname: "/product",
        query: { url: product.url },
      }}
    >
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="mx-auto"
      />

      <p className="font-bold text-xl pt-2">{product.price.currency} {product.price.price}</p>

      {product.badge && (<Badge className="w-fit absolute top-2 right-2">{product.badge}</Badge>)}

      <p className="font-light text-sm">{product.title}</p>

      {product.rating && (<p className="text-yellow-500 text-sm">{product.rating.rating}★ 
      <span className="text-gray-500 ml-2">({product.rating.count})</span></p>)}
    </Link>
  );
}

export default Product;
