"use client";
import Container from "@/ui/layout/container/Container";
import SectionTitle from "@/ui/shared/SectionTitle";
import styles from "./About.module.css";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
export default function About() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    margin: "-400px",
  });

  useEffect(() => {
    if (isInView) {
      animate(`.${styles.aboutTitle}`, {
        transform: "translateX(0)",
        opacity: 1,
      });
    }
  }, [isInView]);

  return (
    <section ref={scope} className={styles.about}>
      <Container>
        <div className={styles.aboutTitle}>
          <SectionTitle title="who we are" />
        </div>
        <p className={`mt-3 ${styles.aboutTitle}`}>
          We build custom software applications and provide solution that will
          fit your business’s need. We are a team of skilled developers and
          designers to help build user centric applications for your business.
          We will listen your ideas and transform it into a product your
          customers will love and use in daily life.
        </p>
      </Container>
    </section>
  );
}
