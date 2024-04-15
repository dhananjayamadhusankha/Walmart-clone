"use client";

import { getCartTotal } from "@/lib/getCartTotal";
import { groupBySku } from "@/lib/groupBySku";
import useCartStore from "@/store";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { Button } from "./ui/button";

function Basket() {
  const cart = useCartStore((state) => state.cart);
  const groped = groupBySku(cart);
  const baskeTotal = getCartTotal(cart);

  console.log("wqmiqwnfbubqe>>", baskeTotal);

  return (
    <div className="max-w-7xl mx-auto">
      <ul className="space-y-5 divide-y-2">
        {Object.keys(groped).map((sku) => {
          const item = groped[sku][0];
          const total = getCartTotal(groped[sku]);

          return (
            <li
              key={sku}
              className="p-5 my-2 flex items-center justify-between"
            >
              {item.images[0] && (
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              )}

              <div className="flex space-x-4 pl-4">
                <div>
                  <p className="font-bold line-clamp-2">{item.title}</p>
                  <div
                    className="line-clamp-1 font-light text-sm mt-2"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
                <div className="flex flex-col border rounded-sm p-5">
                  <AddToCart product={item} />
                  <p className="font-bold mt-4 text-right">{total}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col p-5 justify-end">
        <p className="text-right font-bold text-walmart text-2xl">Total: {baskeTotal}</p>
        <Button className="bg-walmart h-20 mt-5 hover:bg-walmart/50">Checkout</Button>
      </div>
    </div>
  );
}

export default Basket;
