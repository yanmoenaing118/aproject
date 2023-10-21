import Container from "@/ui/layout/container/Container";
import SectionTitle from "@/ui/shared/SectionTitle";
import styles from "./BuildSteps.module.css";
import ArrowOne from "./arrows/Arrow1";
import Arrow2 from "./arrows/Arrow2";
import Arrow3 from "./arrows/Arrow3";
import Arrow4 from "./arrows/Arrow4";

type Step = {
  id: string;
  label: string;
  img: string;
};

const list: Step[] = [
  {
    id: "1",
    label: "Analyses requirements and gather resources ",
    img: "/assets/1.svg",
  },
  {
    id: "2",
    label: "Design and Prototype the product",
    img: "/assets/2.svg",
  },
  {
    id: "3",
    label: "Develop the actual product",
    img: "/assets/3.svg",
  },
  {
    id: "4",
    label: "QA testing",
    img: "/assets/4.svg",
  },
  {
    id: "5",
    label: "Production Deployment",
    img: "/assets/4.svg",
  },
];

export default function BuildSteps() {
  return (
    <section className={styles.buildSteps}>
      <Container>
        <SectionTitle title="how we build your product" />
        <br />
        <Steps steps={list} />
      </Container>
    </section>
  );
}

function Steps({ steps }: { steps: Step[] }) {
  return (
    <div className={styles.steps + " " + "mt-5"}>
      {steps.map((step) => (
        <Step key={step.id} step={step} />
      ))}
      <ArrowOne />
      <Arrow2 />
      <Arrow3 />
      <Arrow4 />
      


    </div>
  );
}

function Step({ step }: { step: Step }) {
  return (
    <div className={styles.step + " " + styles["step" + step.id]}>
      <h3>{step.id}.</h3>
      <h3>{step.label}</h3>
      <div className={styles.step_img}>
        <img src={step.img} alt={step.label} />
      </div>
    </div>
  );
}
