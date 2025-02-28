"use client";

import Hero from "../components/hero";
import About from "../components/about";
import Loading from "../components/loading";
import AboutInnova from "../components/innova";
import Values from "../components/values";
import InnovaStudio from "../components/innovastudio";
import Tech from "../components/tech";
import Footer from "../components/footer";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { GlobalStyles } from "@/lib";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyles />
      {loading ? (
        <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }}>
          <Loading />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <About />
          <AboutInnova />
          <Values />
          <InnovaStudio />
          <Tech />
          <Footer />
        </motion.div>
      )}
    </>
  );
}
