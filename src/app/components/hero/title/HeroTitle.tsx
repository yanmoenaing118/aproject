import useTextSplit from "@/hooks/useTextSplit";
import styles from "./HeroTitle.module.css";
import { useEffect, useState } from "react";

export default function HeroTitle() {
  const { ref, nodes } = useTextSplit();
  const { ref: ref2 } = useTextSplit();
  const { ref: ref3 } = useTextSplit();
  const [show, setShow] = useState(false);

  useEffect(() => {
    nodes.forEach((node) => {
      node.classList.add(styles.animate);
    });
  }, [nodes]);

  return (
    <h1 className={styles.h1}>
      <span ref={ref} split-by="letter" className={styles.business}>
        Modern Businesses
      </span>
      <br />
      <span ref={ref2} split-by="letter" className={styles.solutions}>
        Need Modern
      </span>
      <br />{" "}
      <span ref={ref3} split-by="letter" className={styles.solutions2}>
        Solutions
      </span>
    </h1>
  );
}
