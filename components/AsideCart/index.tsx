"use client"

import { motion } from "framer-motion";
import { useAppSelector } from '@/lib/hooks';
import styles from './AsideCart.module.scss';
import ProductCard from './ProductCard';
import CloseButton from './ProductCard/CloseButton';
import { useDispatch } from 'react-redux';
import { toggleCartMenu } from '@/lib/reducers/cartMenu';
import cartTotal from "@/utils/calculateCartTotal";

const AsideCart = () => {
	const cartMenu = useAppSelector(state => state.cartMenu);
	const cartItems = useAppSelector(state => state.cartItems);
	const dispatch = useDispatch()

	return (
		<motion.section
			className={styles.cart__container}
			style={{
				position: 'absolute',
				right: cartMenu ? 0 : '-500px', // Inicialmente, o menu está fora da tela (direita)
			}}
			animate={{ right: cartMenu ? 0 : '-500px' }} // Animação para deslizar o menu da direita para a esquerda
			transition={{ type: "spring", stiffness: 500, damping: 30 }} // Transição suave
		>
			<h2 className={styles.cart__title}>Carrinho de compras</h2>
			<div className={styles.cart__products}>
				{cartItems.products.map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</div>
			<div className={styles.cart__total}>
				<span>Total:</span>
				<span>{cartTotal()}</span>
			</div>
			<button className={styles.checkout__btn}>
				Finalizar Compra
			</button>
			<div className={styles.close__btn}>
				<CloseButton size='medium' onClick={() => dispatch(toggleCartMenu())} />
			</div>
		</motion.section>
	);
};

export default AsideCart;
