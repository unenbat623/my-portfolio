import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <div className=" text-gray">
      <div className="w-full h-full">
        <animateMotion mode="wait">
          <Header />
          <Component {...pageProps} />
        </animateMotion>
        <Footer />
      </div>
    </div>
  );
}
