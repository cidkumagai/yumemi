import styles from './styles/Header.module.css';

export const Header = () => {
  return (
      <div className={styles.header}>
        <p className={styles.header_text}>都道府県別人口推移</p>
      </div>
  );
};
