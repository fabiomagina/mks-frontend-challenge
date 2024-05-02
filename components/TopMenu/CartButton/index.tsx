"use client"

import Image from "next/image";
import styles from "./CartButton.module.scss";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleCartMenu } from "@/lib/reducers/cartMenu";

const CartButton = () => {
	const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cartItems);
  const cartCount = cartItems.qty.reduce((acc, item) => acc + item.qty, 0);
  
  return (
    <button className={styles.cart__button} onClick={() => dispatch(toggleCartMenu())}>
      <Image
        src="/cart.svg"
        alt="Cart"
        width={18}
        height={19} />
      <span className={styles.cart__count}>
        {cartCount}
      </span>
    </button>
  );
};

export default CartButton;