"use client"

import { useAppSelector } from '@/lib/hooks';
import styles from './AsideCart.module.scss';
import ProductCard from './ProductCard';
import CloseButton from './ProductCard/CloseButton';
import { useDispatch } from 'react-redux';
import { toggleCartMenu } from '@/lib/reducers/cartMenu';

const AsideCart = () => {
	const cartMenu = useAppSelector(state => state.cartMenu);
	const cartItems = useAppSelector(state => state.cartItems);
	const dispatch = useDispatch()

	return (
		<section className={styles.cart__container} style={{display:`${!cartMenu ? 'none' : 'flex'}` }} >
			<h2 className={styles.cart__title}>Carrinho de compras</h2>
			<div className={styles.cart__products}>
				{cartItems.products.map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</div>
			<button className={styles.checkout__btn}>
				Finalizar Compra
			</button>
			<div className={styles.close__btn}>
				<CloseButton size='medium' onClick={() => dispatch(toggleCartMenu())} />
			</div>
		</section>
	);
};

export default AsideCart;