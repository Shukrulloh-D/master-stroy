import { useCart } from '@/shared/lib/cart-context';
import styles from './cart-modal.module.css';

export function CartModal() {
  const { cart, removeFromCart, isOpen, setIsOpen } = useCart();
  if (!isOpen) return null;
  const total = cart.reduce((sum, item) => sum + item.color.price * item.qty, 0);

  return (
    <>
      <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      <div className={styles.drawer}>
        <div className={styles.header}>
          <div className={styles.title}>Корзина</div>
          <button className={styles.close} onClick={() => setIsOpen(false)}>✕</button>
        </div>
        <div className={styles.list}>
          {cart.length === 0 ? <div className={styles.empty}>Корзина пуста</div> : cart.map((item, i) => (
            <div key={i} className={styles.item}>
              <img src={item.image} alt={item.name} className={styles.itemImg} />
              <div className={styles.itemInfo}>
                <div className={styles.itemTitle}>{item.name} (x{item.qty})</div>
                <div className={styles.itemColor}>Цвет: {item.color.name}</div>
                <div className={styles.itemPrice}>{item.color.price * item.qty} руб.</div>
                <button className={styles.removeBtn} onClick={() => removeFromCart(item.id, item.color.name)}>Удалить</button>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.total}><span>Итого:</span><span>{total} руб.</span></div>
            <button className={styles.checkoutBtn}>Оформить заказ</button>
          </div>
        )}
      </div>
    </>
  );
}
