import styles from './styles/Title.module.css';

export const Title = () => {
  const title = '都道府県';
  return <h2 className={styles.title}>{title}</h2>;
};
