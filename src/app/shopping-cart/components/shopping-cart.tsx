"use client";
import { Button } from "@/components/shadcn/button";
import React, { useState } from "react";

interface props {
  countNumber?: number;
}

const ShoppingCart = ({ countNumber = 0 }: props) => {
  const [count, setCount] = useState(countNumber);
  return (
    <>
      <span className="text-9xl ">{count}</span>
      <div className="flex gap-2">
        <Button
          className=" flex items-center justify-center p-2 rounded-xl hover:bg-gray-700 transition-all w-20 h-9"
          onClick={() => setCount(count + 1)}
        >
          +1
        </Button>
        <Button
          className=" flex items-center justify-center p-2 rounded-xl hover:bg-gray-700 transition-all w-20 h-9"
          onClick={() => setCount(count - 1)}
        >
          -1
        </Button>
      </div>
    </>
  );
};

export default ShoppingCart;
