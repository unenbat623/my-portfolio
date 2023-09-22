import React from "react";
import Link from "next/link";
import { images } from "@/next.config";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-gray-800 text-slate-50 h-18">
      <div className="flex justify-around">
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-3xl text-slate-50 items-center"
        >
          <img src="unenbat.png" width={65} height={180} />
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex items-center justify-between pr-16 "
        >
          <Link className="ml-3" href="/">
            Profile
          </Link>
          <Link className="ml-3" href="/about">
            About
          </Link>
          <Link className="ml-3" href="/contact">
            Contact
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
