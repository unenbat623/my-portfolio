import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <div className=" text-gray h-screen">
      <div className="w-full h-[calc(100%-76px)]">
        <animateMotion mode="wait">
          <Component {...pageProps} />
        </animateMotion>
        <Footer />
      </div>
    </div>
  );
}
