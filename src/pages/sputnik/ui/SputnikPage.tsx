import { Page } from '@/shared/ui/Page';

import { products } from '../model/mocks';

import { ProductCard } from './ProductCard/ProductCard';

import styles from './SputnikPage.module.scss';

export const SputnikPage = () => {
  return (
    <Page className={styles.sputnikPage} title="Тестовое задание ProductCard">
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Page>
  );
};
