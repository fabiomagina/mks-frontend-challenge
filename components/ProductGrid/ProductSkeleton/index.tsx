import styles from './ProductSkeleton.module.scss';

const ProductSkeleton = () => {
    return <div className={styles.product__container__skeleton}>
        <div className={styles.product__photo} />
        <div className={styles.product__text}>
            <div className={styles.product__name} />
            <div className={styles.product__name__2} />
            <div className={styles.product__description} />
            <div className={styles.product__button} />
        </div>
    </div>

}
export default ProductSkeleton