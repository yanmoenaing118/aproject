"use client";
import Container from "@/ui/layout/container/Container";
import styles from "./Hero.module.css";
import { BsArrowDown } from "react-icons/bs";
import HeroTitle from "./title/HeroTitle";
export default function Hero() {
  return (
    <section className={styles.hero + " center-item"}>
      <Container>
        <article className={styles.article}>
          <HeroTitle />
          <p className="mt-4">Our team of expertise is ready to help you!</p>
        </article>
        <div className={styles.arrow}>
          <BsArrowDown size="28px" color="inherit" />
        </div>
      </Container>
    </section>
  );
}
