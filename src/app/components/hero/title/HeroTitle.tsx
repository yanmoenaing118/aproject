import { motion } from "framer-motion";
import styles from "./HeroTitle.module.css";

export default function HeroTitle() {
  return (
    <motion.h1
      className={styles.h1}
      initial={{
        opacity: 0,
        y: 200,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: "anticipate",
        },
      }}
    >
      <span className={styles.business}>Modern Businesses</span>
      <br />
      <span className={styles.solutions}>Need Modern</span>
      <br /> <span className={styles.solutions2}>Solutions</span>
    </motion.h1>
  );
}
