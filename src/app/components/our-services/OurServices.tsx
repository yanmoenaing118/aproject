import Container from "@/ui/layout/container/Container";
import SectionTitle from "@/ui/shared/SectionTitle";
import styles from "./OurServices.module.css";

const list = ["Web Development", "UI UX", "Moble Application Development"];
export default function OurServices() {
  return (
    <section className={styles.services}>
      <Container>
        <div>
          <SectionTitle title="Our services" />
          <div className={styles.services_list + " mt-4"}>
            {list.map((item, i) => (
              <Service key={item} item={item} reverse={i % 2 == 0} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Service({ item, reverse }: { item: string; reverse: boolean }) {
  const gradient = !reverse
    ? "linear-gradient(45deg,hsla(316, 77%, 65%, 1), hsla(161, 79%, 40%, 1) )"
    : "linear-gradient( 45deg,hsla(161, 79%, 40%, 1), hsla(316, 77%, 65%, 1))";
  return (
    <div
      className={styles.service}
      style={{
        backgroundImage: gradient,
      }}
    >
      <span>{item}</span>
    </div>
  );
}
