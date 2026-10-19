import { useState } from 'react';
import { Container } from '@/shared/ui/container/container';
import { useSection } from '@/shared/api/queries';
import { CategoryCard } from '@/entities/category/category-card';
import { CatalogSkeleton } from '@/shared/ui/skeleton/skeleton';
import styles from './catalog-preview.module.css';

export function CatalogPreview() {
  const { data: categories, isLoading } = useSection('categories');
  const [showAll, setShowAll] = useState(false);

  const displayedCategories = showAll ? categories : categories?.slice(0, 4);

  return (
    <section id="catalog" className={styles.section}>
      <Container>
        <h2>Каталог продукции</h2>
        {isLoading ? (
          <CatalogSkeleton />
        ) : (
          <div className={styles.grid}>
            {displayedCategories?.map(cat => <CategoryCard key={cat.id} category={cat} />)}
          </div>
        )}
        <div className={styles.btnWrap}>
          <button className={styles.btn} onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Скрыть' : 'Больше товаров'}
          </button>
        </div>
      </Container>
    </section>
  );
}
