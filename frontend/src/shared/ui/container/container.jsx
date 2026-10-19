import styles from './container.module.css';
export function Container({ children, className = '' }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}
