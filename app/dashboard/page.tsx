import styles from "./dashboard.module.css";
import NewNote from "./components/NewNote";
import NoteList from "./components/NoteList";

export default function DashboardPage() {
  return (
    <div className={styles.columns}>
      <div className={styles.leftPanel}>
        <NoteList />
      </div>
      <div className={styles.rightPanel}>
        <NewNote />
      </div>
    </div>
  );
}