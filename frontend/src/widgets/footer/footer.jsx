import { Container } from '@/shared/ui/container/container';
import styles from './footer.module.css';

export function Footer() {
  return (
    <footer id="contacts" className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div>
            <div className={styles.colTitle}>Магазин</div>
            <a href="#" className={styles.link}>Персональный раздел</a>
            <div className={styles.iconText}><img src="/images/head-foot/icon-clock.png" alt=""/> Режим работы: с 8:00 до 20:00</div>
            <div className={styles.iconText}><img src="/images/head-foot/icon-phone.png" alt=""/> +7 (926) 105-94-14<br/>+7 (910) 470-67-97</div>
          </div>
          <div>
            <div className={styles.colTitle}>Каталог</div>
            <a href="#" className={styles.link}>Акции</a>
            <a href="#" className={styles.link}>Тротуарная плитка</a>
            <a href="#" className={styles.link}>Бордюры</a>
          </div>
          <div>
            <div className={styles.colTitle}>Сервисы</div>
            <a href="#" className={styles.link}>Дизайн-проект</a>
            <a href="#" className={styles.link}>Укладка брусчатки</a>
            <a href="#" className={styles.link}>Доставка</a>
          </div>
          <div>
            <div className={styles.colTitle}>О компании</div>
            <a href="#" className={styles.link}>Контакты</a>
            <a href="#" className={styles.link}>Завод BRAER</a>
            <a href="#" className={styles.link}>Портфолио</a>
          </div>
        </div>
        <div className={styles.copyright}>© 2022 ООО "Мастер строй"</div>
      </Container>
    </footer>
  );
}
