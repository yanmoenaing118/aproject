"use client";
import Container from "@/ui/layout/container/Container";
import styles from "./Hero.module.css";
import { BsArrowDown } from "react-icons/bs";
import HeroTitle from "./title/HeroTitle";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const arrowRef = useRef(null);
  useLayoutEffect(() => {
    // gsap.set(ref.current, {
    //   opacity: 0
    // })
    const tl = gsap.timeline({ delay: 1});
    tl.to(ref.current, {
      duration: 1,
      ease: "power4.out",
      y: 0,
      opacity: 1
    }).to(arrowRef.current, {
      duration: 1,
      yoyo: true,
      y: -50,
      opacity: 1,
      ease: "bounce",
    })
  }, []);

  return (
    <section className={styles.hero + " center-item"}>
      <Container>
        <article className={styles.article}>
          <HeroTitle />
          <p className="mt-4" ref={ref}>
            Our team of expertise is ready to help you!
          </p>
        </article>
        <div className={styles.arrow} ref={arrowRef}>
          <BsArrowDown size="28px" color="inherit" />
        </div>
      </Container>
    </section>
  );
}
