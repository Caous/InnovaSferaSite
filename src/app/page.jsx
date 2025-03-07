"use client";

import { useState, useEffect } from "react";
import { GlobalStyles } from "@/lib";

import { motion } from "framer-motion";

// Fix: Muitas importações
import { About, Cases } from "../components";
import Hero from "../components/hero";
import Loading from "../components/loading";
import AboutInnova from "../components/innova";
import Values from "../components/values";
import InnovaStudio from "../components/innovastudio";
import Tech from "../components/tech";
import Footer from "../components/footer";
import Jobs from "../components/jobs";
import ServicesTwo from "../components/servicestwo";

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
          <Jobs />
          <Cases />
          <ServicesTwo />
          <InnovaStudio />
          <Tech />
          <Footer />
        </motion.div>
      )}
    </>
  );
}
