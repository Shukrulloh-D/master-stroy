import styles from './modal.module.css';
export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>✕</button>
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
    </div>
  );
}
