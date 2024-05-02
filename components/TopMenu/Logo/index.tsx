import styles from './Logo.module.scss'

const Logo = () => {
	return (
		<section className={styles.logo}>
			<h1 className={styles.first__name}>
				MKS
			</h1>
			<h1 className={styles.second__name}>
				Sistemas
			</h1>

		</section>
	);
};

export default Logo;