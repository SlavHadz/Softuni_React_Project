import styles from './DeleteConfirmationModal.module.css';

export default function DeleteConfirmationModal({
    itemName,
    itemId,
    closeHandler,
    confirmHandler
}) {
    return (
        <>
            <div className={styles.modal__body}>
                <p className={styles.modal__text}>Are you sure you want to delete {itemName}?</p>
                <div className={styles.button__container}>
                    <button className={styles.button__danger} onClick={() => confirmHandler(itemId)}>Confirm</button>
                    <button className={styles.button__close} onClick={closeHandler}>Close</button>
                </div>
            </div>
            <div onClick={closeHandler} className={styles.backdrop}></div>
        </>
    );
}