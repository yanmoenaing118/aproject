import styles from "@/ui/shared/SectionTitle.module.css";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className={styles.title}>
      <h2 >{title}</h2>
    </div>
  );
}
