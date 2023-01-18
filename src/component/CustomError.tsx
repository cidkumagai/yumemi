import styles from './styles/CustomError.module.css';

export const CustomError = (props: { message: string }) => {
  const jpMsg1 = 'エラーが発生しました。';
  const jpMsg2 = 'しばらく時間を置いてから再度アクセスしてください。';
  return (
    <div className={styles.error_wrapper}>
      <div className={styles.error}>
        <p className={styles.error_japanese}>
          {jpMsg1}
          <br />
          {jpMsg2}
        </p>
        <p className={styles.error_english}>[Error] {props.message}</p>
      </div>
    </div>
  );
};
