import styles from './skeleton.module.css';

export function Skeleton({ className, width, height }) {
  return <div className={`${styles.skeleton} ${className || ''}`} style={{ width, height }} />;
}

export function CatalogSkeleton() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px' }}>
      {[1, 2, 3, 4].map(i => <Skeleton key={i} height="250px" />)}
    </div>
  );
}

export function ProductsSkeleton() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
      {[1, 2, 3, 4, 5, 6].map(i => <Skeleton key={i} height="260px" />)}
    </div>
  );
}
