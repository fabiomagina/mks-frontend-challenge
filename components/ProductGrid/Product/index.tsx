import Image from 'next/image';
import styles from './Product.module.scss'
import IProduct from '@/interfaces/IProduct'
import { useAppDispatch } from '@/lib/hooks';
import { addToCart } from '@/lib/reducers/cartItems';
import priceFormatter from '@/utils/priceFormatter';

const Product = ({ product }: { product: IProduct }) => {
  const priceString = priceFormatter(product.price)
  const dispatch = useAppDispatch();

  return (
    <div className={styles.product__container}>
      <div className={styles.product__photo}>
        <Image
          src={product.photo}
          alt={product.name}
          layout='fill'
          objectFit='contain'
          style={{
            maxHeight: '138px',
            minHeight: '138px',
            maxWidth: '100%',
            margin: '12px 0'
          }}
        />
      </div>
      <div className={styles.product__name}>
        <h2>{product.name}</h2>
        <div className={styles.product__price}>
          <span>
            {priceString}
          </span>
        </div>
      </div>
      <h3 className={styles.product__description}>{product.description}</h3>
      <div className={styles.btn__comprar} onClick={() => dispatch(addToCart(product))}>
        <Image alt='shopping bag' src='/shopping_bag.svg' width={12} height={12} />
        <span >
          Comprar
        </span>
      </div>
    </div>
  );
};

export default Product;