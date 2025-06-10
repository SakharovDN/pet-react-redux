import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { BodyL, BodyM, Heading5 } from '@/shared/ui/Typography';

import { formatProductPrice } from '../../lib/formatProductPrice';
import { Product } from '../../model/types';

import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = memo(({ product }: ProductCardProps) => {
  const { title, origin, price, currency, imageUrl } = product;
  const { i18n } = useTranslation();

  return (
    <div className={styles.productCard}>
      <img className={styles.image} alt={title} src={imageUrl} />

      <Heading5 className={styles.title}>{title}</Heading5>

      <BodyL>{origin}</BodyL>

      <BodyM className={styles.price} bold>
        {formatProductPrice(price, { currency, language: i18n.language })}
      </BodyM>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';
