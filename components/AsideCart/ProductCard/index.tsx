import Image from 'next/image';
import styles from './ProductCard.module.scss';
import IProduct from '@/interfaces/IProduct';
import priceFormatter from '@/utils/priceFormatter';
import QtyButton from './QtyButton';
import CloseButton from './CloseButton';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '@/lib/reducers/cartItems';

const ProductCard = ({ product }: { product: IProduct }) => {
    const dispatch = useDispatch()

    return (
        <div className={styles.product__card}>
            <div className={styles.product__photo}>
                { product.photo !== '' && 
                <Image
                    src={product.photo}
                    alt={product.name}
                    layout='fill'
                    objectFit='contain'
                    style={{
                        height: '100%'
                    }} />}
            </div>
            <h2 className={styles.product__name}>
                {product.name}
            </h2>
            <div className={styles.product__qty}>
                <QtyButton product={product} />
            </div>
            <span className={styles.product__price}>
                {priceFormatter(product.price)}
            </span>
            <div className={styles.product__remove}>
                <CloseButton size='small' onClick={() => dispatch(removeFromCart(product))} />
            </div>


        </div>
    );
};

export default ProductCard;