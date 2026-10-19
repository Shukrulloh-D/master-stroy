import styles from './delivery-map.module.css';

export function DeliveryMap() {
  return (
    <section id="delivery" className={styles.section}>
                                    {/* Верх */}
      <div className={styles.gridTop}>
        
                                {/* Ряд 1 */}
        <div className={styles.orangeBox}>
          <h2 className={styles.orangeTitle}>
            <span>ООО «МАСТЕР СТРОЙ»</span>
            <span>ОСУЩЕСТВЛЯЕТ ДОСТАВКУ:</span>
          </h2>
          <p className={styles.orangeText}>
            После оформления заказа мы оперативно организуем доставку в Москве и Московской области.
          </p>
        </div>

        <div className={styles.textureBox} aria-label="Текстура плитки"></div>

                                      {/* Ряд 2 */}
        <div className={styles.truckBox} aria-label="Доставочный грузовик"></div>

        <address className={styles.darkBox}>
          <h3 className={styles.darkTitle}>Наше производство</h3>
          <p className={styles.darkText}>Волоколамский р-н, пос. Чисмена, ул. Центральная, д1</p>
          <p className={styles.workTime}>Время работы: Без выходных, круглосуточно</p>
          <a href="tel:+74999949099" className={styles.phone}>+7 (499) 994-90-99</a>
        </address>
        
      </div>
      
                                         {/* Ряд 3 */}
      <section className={styles.mapContainer} aria-label="Карта проезда">
        <iframe 
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A2a9a1c0e6b8f4b7e6f5d4c3b2a1&source=constructor" 
          title="Интерактивная карта доставки"
          loading="lazy"
          className={styles.mapIframe}
        ></iframe>
      </section>
    </section>
  );
}
