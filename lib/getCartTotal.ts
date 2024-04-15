import { Product } from "@/typings/productTypings";

export function getCartTotal(products: Product[]): string {
  const total = products.reduce(
    (accumulator: number, product: Product) => accumulator + product.price,
    0
  );

  return `${products[0]?.currency ? products[0]?.currency : ""} ${total.toFixed(2)}`;
}
