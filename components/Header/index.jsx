import React from "react";
import Link from "next/link";
import Profile from "@/components/images/unenbat.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-slate-800 h-9">
      <div className="flex justify-around">
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-3xl text-purple-500 items-center"
        >
          <img src={Profile} alt="Porfile" />
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex items-center justify-between "
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
