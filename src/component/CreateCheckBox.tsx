import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getPrefData, getPrefList, updateCheckBox } from '../population/populationSlice';

import styles from './styles/CreateCheckBox.module.css';

const CheckBox = (props: { prefCode: number; prefName: string; prefData: number[] | null }) => {
  const { prefCode, prefName, prefData } = props;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPrefList());
  }, [dispatch]);
  return (
    <label
      className={styles.checkbox_text}
    >
      <input
        type={'checkbox'}
        className={styles.checkbox_input}
        onChange={(e) => {
          dispatch(
            updateCheckBox({
              prefCode: prefCode,
              checked: e.target.checked,
            }),
          );
          if (prefData === null) {
            dispatch(getPrefData(prefCode));
          }
        }}
      />
      {prefName}
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
              <CheckBox
                prefCode={data.prefCode}
                prefName={data.prefName}
                prefData={data.prefData}
                key={data.prefCode}
              />
            );
          })}
      </div>
    </>
  );
};
