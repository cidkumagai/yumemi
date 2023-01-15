import styles from './styles/Loading.module.css';

export const Loading = () => {
  return (
    <>
      <div className={styles.loader_wrapper}>
        <span className={styles.loader} />
        <span className={styles.loader} />
        <span className={styles.loader} />
        <span className={styles.loader} />
      </div>
    </>
  );
};
