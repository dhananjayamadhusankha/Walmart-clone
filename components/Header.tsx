"use client";

import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";
import walmartLogo from "./images/walmart-seeklogo.png";
import { useRouter } from "next/navigation";
import useCartStore from "@/store";
import { getCartTotal } from "@/lib/getCartTotal";

function Header() {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const total = getCartTotal(cart);

  const haddleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.input.value;
    router.push(`/search?q=${input}`);
  };
  return (
    <header className="flex flex-col md:flex-row bg-walmart px-10 py-7 space-x-5 items-center">
      <Link href="/" className="mb-5 md:mb-0">
        <Image src={walmartLogo} alt="logo" width={150} />
      </Link>

      <form
        onSubmit={haddleSubmit}
        className="flex items-center bg-white rounded-full w-full flex-1"
      >
        <input
          type="text"
          name="input"
          placeholder="Search Everything..."
          className="flex-1 rounded-full px-4 outline-none placeholder:text-sm text-black"
        ></input>
        <button type="submit">
          <Search className="rounded-full h-10 w-10 bg-yellow-400 px-2 cursor-pointer" />
        </button>
      </form>
      <div className="flex space-x-5 mt-5 md:mt-0">
        <Link
          href=""
          className="hidden xl:flex text-white items-center font-bold space-x-2 text-sm"
        >
          <Grid2X2 size={20} />
          <p>Departments</p>
        </Link>

        <Link
          href=""
          className="hidden xl:flex text-white items-center font-bold space-x-2 text-sm"
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>

        <Link
          href=""
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Heart size={20} />
          <div>
            <p className="text-xs font-extralight">Dhananjaya</p>
            <p>My Items</p>
          </div>
        </Link>

        <Link
          href=""
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign In</p>
            <p>Account</p>
          </div>
        </Link>

        <Link
          href="/basket"
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <ShoppingCart size={20} />
          <div>
            <p className="text-xs font-extralight">
              {cart.length > 0 ? `${cart.length} items` : "No items"}
            </p>
            <p>
              {cart.length > 0 ? `${total}`: "0"}
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
