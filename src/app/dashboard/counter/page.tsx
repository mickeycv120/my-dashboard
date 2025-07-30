import type { Metadata } from "next";
import ShoppingCart from "@/app/shopping-cart/components/shopping-cart";

export const metadata: Metadata = {
  title: "Counter",
  description: "A counter page",
};

export default function CounterPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1>Productos en el carrito</h1>
      <ShoppingCart countNumber={20} />
    </div>
  );
}
