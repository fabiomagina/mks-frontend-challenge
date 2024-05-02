"use client"

import { useQuery } from '@tanstack/react-query';
import styles from './ProductGrid.module.scss'
import IProduct from '@/interfaces/IProduct';
import Product from './Product';
import ProductSkeleton from './ProductSkeleton';
import getProducts from '@/server/getProducts';

const ProductGrid = () => {

  const { data: products, isLoading, isFetched } = useQuery({
    queryKey: ['products'], queryFn: () => getProducts({ page: 1, rows: 10, sortBy: 'id', orderBy: 'DESC' })
  });

  if (isLoading)
    return <section className={styles.product__grid}>
      <ul>
        {[...Array(8)].map((_, index) =>
          <li key={index} className={styles.product__item}>
            <ProductSkeleton />
          </li>)}
      </ul>
    </section >


  if (isFetched)
    return (
      <section className={styles.product__grid}>
        <ul>
          {products && products.map((product: IProduct) =>
            <li key={product.id} className={styles.product__item}>
              <Product product={product} />
            </li>)}
        </ul>
      </section>
    );
};

export default ProductGrid;