import { useState } from 'react';
import { useCart } from '@/shared/lib/cart-context';
import styles from './product-card.module.css';

export function ProductCard({ product, onQuickView }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap} onClick={() => onQuickView(product)}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <div className={styles.quickViewBadge}>Быстрый просмотр</div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{product.name}</div>
        <div className={styles.specs}>Размер: {product.size}</div>
        <div className={styles.specs}>Кол-во: {product.quantity}</div>
        <div className={styles.colorsList}>
          {product.colors.map((color, i) => (
            <div key={i} className={styles.colorRow} onClick={() => setSelectedColor(color)}>
              <div className={styles.colorLeft}><span className={styles.colorDot} style={{ background: color.hex }} /><span>{color.name}</span></div>
              <span>{color.price} руб.</span>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>от {selectedColor.price} руб.</div>
          <button className={`${styles.addBtn} ${added ? styles.addBtnSuccess : ''}`} onClick={handleAdd}>
            {added ? '✓' : '+'}
          </button>
        </div>
      </div>
    </div>
  );
}
