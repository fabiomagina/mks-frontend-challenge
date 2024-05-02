import CartButton from './CartButton';
import Logo from './Logo';
import styles from './TopMenu.module.scss'

const TopMenu = () => {
  return (
    <section className={styles.top_menu}>
      <Logo />
      <CartButton />
    </section>
  );
};

export default TopMenu;