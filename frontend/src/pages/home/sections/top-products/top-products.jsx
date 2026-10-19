import { useState } from 'react';
import { Container } from '@/shared/ui/container/container';
import { useSection } from '@/shared/api/queries';
import { ProductCard } from '@/entities/product/product-card';
import { Modal } from '@/shared/ui/modal/modal';
import { ProductsSkeleton } from '@/shared/ui/skeleton/skeleton';
import styles from './top-products.module.css';

export function TopProducts() {
  const { data: products, isLoading } = useSection('products');
  const [quickView, setQuickView] = useState(null);

  return (
    <section className={styles.section}>
      <Container>
        <h2>Топ товаров</h2>
        {isLoading ? (
          <ProductsSkeleton />
        ) : (
          <div className={styles.grid}>
            {products?.map(prod => <ProductCard key={prod.id} product={prod} onQuickView={setQuickView} />)}
          </div>
        )}
      </Container>

      {quickView && (
        <Modal isOpen={!!quickView} onClose={() => setQuickView(null)} title="Быстрый просмотр">
          <div style={{ textAlign: 'center' }}>
            <img src={quickView.image} alt={quickView.name} style={{ maxHeight: '200px', margin: '0 auto 20px' }} />
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{quickView.name}</h3>
            <p style={{ color: '#777', marginBottom: '20px' }}>Размер: {quickView.size} | Кол-во: {quickView.quantity}</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--accent)' }}>от {quickView.colors[0].price} руб/кв.м</p>
          </div>
        </Modal>
      )}
    </section>
  );
}
