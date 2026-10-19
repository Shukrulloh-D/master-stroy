import styles from './button.module.css';
export function Button({ children, variant = 'primary', className = '', ...props }) {
  return <button className={`${styles.btn} ${styles[`btn--${variant}`]} ${className}`} {...props}>{children}</button>;
}
