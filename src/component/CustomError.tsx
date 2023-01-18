import styles from './styles/CustomError.module.css';

export const CustomError = (props: { message: string }) => {
  return (
    <div className={styles.error_wrapper}>
      <div className={styles.error}>
        <p className={styles.error_japanese}>
          エラーが発生しました。
          <br />
          しばらく時間を置いてから再度アクセスしてください。
        </p>
        <p className={styles.error_english}>[Error] {props.message}</p>
      </div>
    </div>
  );
};
