"use client";
import { Button } from "@/components/shadcn/button";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface props {
  countNumber?: number;
}

const ShoppingCart = ({ countNumber = 0 }: props) => {
  const [count, setCount] = useState(countNumber);
  return (
    <>
      <div className="h-20 flex items-center justify-center mt-8 min-w-[100px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={count}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.3,
            }}
            className="text-9xl font-mono tabular-nums text-gray-800 font-bold block"
          >
            {count}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="flex gap-2 mt-12">
        {/*   <Button
          className=" flex items-center justify-center p-2 rounded-xl hover:bg-gray-700 transition-all w-20 h-9"
          onClick={() => setCount(count - 1)}
        >
          -1
        </Button> */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary text-primary-foreground flex items-center justify-center p-2 rounded-xl hover:bg-primary/90 transition-all w-20 h-9"
          onClick={() => setCount(count - 1)}
        >
          -1
        </motion.button>
        {/* <Button
          className=" flex items-center justify-center p-2 rounded-xl hover:bg-gray-700 transition-all w-20 h-9"
          onClick={() => setCount(count + 1)}
        >
          +1
        </Button> */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary text-primary-foreground flex items-center justify-center p-2 rounded-xl hover:bg-primary/90 transition-all w-20 h-9"
          onClick={() => setCount(count + 1)}
        >
          +1
        </motion.button>
      </div>
    </>
  );
};

export default ShoppingCart;
