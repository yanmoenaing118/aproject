"use client";
import Container from "@/ui/layout/container/Container";
import styles from "./Hero.module.css";
import { BsArrowDown } from "react-icons/bs";
import HeroTitle from "./title/HeroTitle";
import { useEffect, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const arrowRef = useRef(null);

  return (
    <section className={styles.hero + " center-item"}>
      <Container>
        <article className={styles.article}>
          <HeroTitle />
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,

              transition: {
                duration: 1,
                delay: 1,
                easings: ["backOut"],
              },
            }}
            className="mt-4"
            ref={ref}
          >
            Our team of expertise is ready to help you!
          </motion.p>
        </article>
        <motion.div
          initial={{
            opacity: 0,
            transform: "translate(-50%, 10%)",
            y: 100,
          }}
          animate={{
            opacity: 1,
            transform: "translate(-50%, -100%)",
            transition: {
              delay: 1.3,
              ease: "easeInOut",
              y: -100,
            },
          }}
          className={styles.arrow}
          ref={arrowRef}
        >
          <BsArrowDown size="28px" color="inherit" />
        </motion.div>
      </Container>
    </section>
  );
}
