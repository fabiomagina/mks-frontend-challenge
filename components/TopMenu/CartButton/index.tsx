import Image from "next/image";
import styles from "./CartButton.module.scss";

const CartButton = () => {
  return (
    <button className={styles.cart__button}>
      <Image
        src="/cart.svg"
        alt="Cart"
        width={18}
        height={19} />
      <span className={styles.cart__count}>
        0
      </span>
    </button>
  );
};

export default CartButton;