import styles from './category-card.module.css';
export function CategoryCard({ category }) {
  return (
    <div className={styles.card}>
      <img src={category.image} alt={category.name} className={styles.image} />
      <div className={styles.name}>{category.name}</div>
    </div>
  );
}
