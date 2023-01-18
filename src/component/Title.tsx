import styles from './styles/Title.module.css';

export const Title = () => {
  const title = '都道府県';
  return <p className={styles.title}>{title}</p>;
};
