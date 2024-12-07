import styles from '../styles/Page.module.css';

export default function Games() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageHeader}>Fun Games</h1>
      <p>Welcome to the Fun Games page! Here you can play various interactive games that are both educational and entertaining.</p>
      <p>Enjoy games like puzzles, memory challenges, and more!</p>
    </div>
  );
}
