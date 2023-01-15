import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getPrefList } from '../population/populationSlice';

import styles from './styles/CreateCheckBox.module.css';

const CheckBox = (props: { prefCode: number; prefName: string }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <label
      className={styles.checkbox_text}
      style={{ opacity: isHover ? 0.5 : 1 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <input type={'checkbox'} className={styles.checkbox_input} />
      {props.prefName}
    </label>
  );
};

export const CreateCheckBox = () => {
  const { result } = useAppSelector((state) => state.populations);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPrefList());
  }, [dispatch]);
  return (
    <>
      <div className={styles.checkbox_wrapper}>
        {result &&
          result.map((data) => {
            return (
              <CheckBox prefCode={data.prefCode} prefName={data.prefName} key={data.prefCode} />
            );
          })}
      </div>
    </>
  );
};
