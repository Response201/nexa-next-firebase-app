import styles from "./dashboard.module.css";
import NewNote from "./components/NewNote";

export default function DashboardPage() {
  return (
    <div className={styles.columns}>
      <div className={styles.leftPanel}></div>
      <div className={styles.rightPanel}>
        <NewNote />
      </div>
    </div>
  );
}