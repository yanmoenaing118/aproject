import RequestQuoteBtn from "@/ui/shared/RequestQuoteBtn";
import styles from "./Header.module.css";
import Container from "@/ui/layout/container/Container";
export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.logo}>LOGO</div>
          <div>
            <RequestQuoteBtn />
          </div>
        </nav>
      </Container>
    </header>
  );
}
