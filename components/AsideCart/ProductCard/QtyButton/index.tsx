import { useAppSelector } from '@/lib/hooks';
import styles from './QtyButton.module.scss'
import IProduct from '@/interfaces/IProduct';
import { addToCart, removeOneFromCart } from '@/lib/reducers/cartItems';
import { useDispatch } from 'react-redux';

const QtyButton = ({ product }: { product: IProduct }) => {
  const cartItems = useAppSelector(state => state.cartItems);
  const itemQty = cartItems.qty.find(item => item.productId === product.id)!.qty
  const dispatch = useDispatch()

  return (
    <div className={styles.qty}>
      <p className={styles.description}>
        Qtd:
      </p>
      <div className={styles.qty__buttons}>
        <button onClick={() => dispatch(removeOneFromCart(product))}>-</button>
        <span>{itemQty}</span>
        <button onClick={() => dispatch(addToCart(product))}>+</button>
      </div>

    </div>
  );
};

export default QtyButton;