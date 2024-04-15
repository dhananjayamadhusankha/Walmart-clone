import Basket from "@/components/Basket";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";

function BasketPage() {
  return (
    <div className="p-10 w-full max-w-7xl mx-auto">
      <div className="flex space-x-2 items-center">
        <ShoppingCartIcon className="h-10 w-10"></ShoppingCartIcon>
        <h1 className="text-3xl">Your Cart</h1>
      </div>
      <p className="mt-2 mb-7">Review the items in your cart and checkout when ready!</p>
      <Basket />

      {/* <Button className="bg-walmart items-center ">Checkout</Button> */}
    </div>
  );
}

export default BasketPage;
