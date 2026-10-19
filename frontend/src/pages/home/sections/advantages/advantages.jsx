import { Container } from '@/shared/ui/container/container';
import { useSection } from '@/shared/api/queries';
import { Loader } from '@/shared/ui/loader/loader';
import styles from './advantages.module.css';

export function Advantages() {
  const { data: advantages, isLoading } = useSection('advantages');
  if (isLoading) return <Loader />;

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>Наши преимущества</h2>
        <div className={styles.grid}>
          {advantages?.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.icon} alt={item.title} className={styles.icon} />
              <div className={styles.cardTitle}>{item.title}</div>
              <div className={styles.text}>{item.text}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
