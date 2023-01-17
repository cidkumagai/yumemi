import { ReactNode } from 'react';

import styles from './styles/CustomContent.module.css'
export const CustomContent = (props: { children: ReactNode }) => {
  return <div className={styles.custom_content}>{props.children}</div>;
};
