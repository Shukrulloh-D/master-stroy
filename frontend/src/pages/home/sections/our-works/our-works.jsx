import { Container } from '@/shared/ui/container/container';
import { useSection } from '@/shared/api/queries';
import { Loader } from '@/shared/ui/loader/loader';
import styles from './our-works.module.css';

export function OurWorks() {
  const { data: works, isLoading } = useSection('works');
  if (isLoading) return <Loader />;

  return (
    <section className={styles.section}>
      <Container>
        <h2>Наши работы</h2>
        <p className={styles.text}>Мы гордимся каждым реализованным проектом. От небольших садовых дорожек до масштабных городских площадей — мы гарантируем качество и долговечность.</p>
        <div className={styles.grid}>
          {works?.map((img, i) => (
            <img key={i} src={img} alt={`Работа ${i+1}`} className={styles.workImg} />
          ))}
        </div>
      </Container>
    </section>
  );
}
