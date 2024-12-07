import styles from '../styles/Page.module.css';

export default function Coloring() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageHeader}>Coloring Zone</h1>
      <p>Welcome to the Coloring Zone! Let your creativity run wild as you color beautiful pictures and explore different themes.</p>
      <p>Choose from a variety of coloring pages and unleash your artistic skills!</p>
    </div>
  );
}
