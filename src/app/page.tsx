import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>{process.env.NEXT_PUBLIC_TEST}</div>
      <div>test1</div>
    </div>
  );
}
