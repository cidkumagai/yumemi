import styles from './styles/Header.module.css';

export const Header = () => {
  const titleText = '都道府県別人口推移';
  return (
    <header>
      <div className={styles.header}>
        <h1 className={styles.header_text}>{titleText}</h1>
      </div>
    </header>
  );
};
