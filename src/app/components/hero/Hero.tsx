import Container from "@/ui/layout/container/Container";
import styles from "./Hero.module.css";
import { BsArrowDown } from "react-icons/bs";
export default function Hero() {
  return (
    <section className={styles.hero + " center-item"}>
      <Container>
        <article className={styles.article}>
          <h1>
            <span>Modern Businesses</span> <br />
            Need Modern
            <br /> Solutions
          </h1>
          <p className="mt-4">Our team of expertise is ready to help you!</p>
        </article>
        <div className={styles.arrow}>
          <BsArrowDown size="28px" color="inherit" />
        </div>
      </Container>
    </section>
  );
}
