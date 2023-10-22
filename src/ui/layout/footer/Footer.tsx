import React from "react";
import Container from "../container/Container";
import styles from "./Footer.module.css";
import { BsMailbox, BsPhoneFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_wrapper}>
          <span className={styles.logo}>LOGO</span>

          <FooterContact text="09768047177" icon={<BsPhoneFill />} />
          <FooterContact text="xyxnzeads@mail.com" icon={<BsMailbox />} />
        </div>
      </Container>
    </footer>
  );
}

function FooterContact({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactElement;
}) {
  return (
    <div className={styles.contact}>
      <div>{icon}</div>
      <button>{text}</button>
    </div>
  );
}
