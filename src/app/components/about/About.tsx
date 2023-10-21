import Container from "@/ui/layout/container/Container";
import SectionTitle from "@/ui/shared/SectionTitle";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <Container>
        <SectionTitle title="who we are" />
        <p className="mt-3">
        We build custom software applications and provide solution that will fit your business’s need. We are a team of skilled developers and designers to help build user centric applications for your business. We will listen your ideas and transform it into a product your customers will love and use in daily life. 
        </p>
      </Container>
    </section>
  );
}
