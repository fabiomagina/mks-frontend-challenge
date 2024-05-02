import styles from './CloseButton.module.scss'

const CloseButton = ({ size, onClick }: { size: 'small' | 'medium', onClick: any }) => {
    return (
        <button className={`${styles.close__btn} 
        ${size === 'medium'
                ? styles.close__btn__medium
                : styles.close__btn__small}`}
                onClick={onClick}>
            X
        </button>
    );
};

export default CloseButton;