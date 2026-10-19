import { useState } from 'react';
import { Container } from '@/shared/ui/container/container';
import { Modal } from '@/shared/ui/modal/modal';
import { CallbackForm } from '@/features/callback-form/callback-form';
import { useCart } from '@/shared/lib/cart-context';
import styles from './header.module.css';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart = [], setIsOpen: openCart } = useCart();
  
  const totalItems = cart?.reduce((sum, item) => sum + (item.qty || 0), 0) || 0;
  const serverPhones = [
    "+7 (926) 105-94-14",
    "+7 (910) 470-67-97",
    "+7 (499) 994-90-99"
  ];
  // Разделение массива
  const mainColumnPhones = serverPhones.slice(0, 2);
  const sidePhones = serverPhones.slice(2);

  return (
    <>
      <div className={styles.topBar}>
        <Container className={styles.topInner}>
          <div className={styles.topItem}>
            <img src="/images/head-foot/icon-pin.png" alt="Адрес" />
            <span>Волоколамский район,<br/>пос. Чисмена, ул. Центральная, 1</span>
          </div>
          
          <div className={styles.topItem}>
            <img src="/images/head-foot/icon-clock.png" alt="Режим работы" />
            <span>Режим работы:<br/>с 8:00 до 20:00</span>
          </div>
          
          <div className={styles.topItem}>
            <img src="/images/head-foot/icon-phone.png" alt="Телефоны" />
            <div className={styles.phonesContainer}>
              <div className={styles.phonesMainColumn}>
                {mainColumnPhones.map((phone, index) => (
                  <span key={index}>{phone}</span>
                ))}
              </div>
              {sidePhones.map((phone, index) => (
                <span key={index} className={styles.phoneSide}>{phone}</span>
              ))}
            </div>
          </div>
          <button className={styles.callbackBtn} onClick={() => setIsOpen(true)}>
            Заказать звонок
          </button>
        </Container>
      </div>
      <header className={styles.header}>
        <Container className={styles.inner}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Мастер Строй" />
          </div>
          <nav className={styles.nav}>
            <a href="#about">О компании</a>
            <a href="#catalog">Укладка тротуарной плитки</a>
            <a href="#portfolio">Портфолио</a>
            <a href="#useful">Полезно знать</a>
            <a href="#delivery">Доставка и оплата</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <button className={styles.cartBtn} onClick={() => openCart?.(true)}>
            🛒 Корзина {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
          </button>
        </Container>
      </header>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Обратный звонок">
        <CallbackForm />
      </Modal>
    </>
  );
}
