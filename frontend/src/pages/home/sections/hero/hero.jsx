import { Container } from '@/shared/ui/container/container';
import styles from './hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} style={{ backgroundImage: "url('/images/hero/hero-bg.png')" }}>
      <div className={styles.overlay} />
      <Container className={styles.content}>
        <h1 className={styles.title}>Тротуарная плитка в Волоколамске<br/>напрямую от производителя</h1>
        <p className={styles.desc}>Вы ищете качественный и надежный тротуарная плитка в Волоколамске? Мы готовы предложить огромное количество вариантов.<br/>отличную возможность приобрести современные изделия с высокой показателями эстетики и механической стойкости напрямую от производителя – компании «Мастер Строй».</p>
        <a href="#catalog" className={styles.btn}>Каталог</a>
      </Container>
    </section>
  );
}
