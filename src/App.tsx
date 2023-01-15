import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from './app/hooks';
import { getPrefList, getPrefData } from './population/populationSlice';

import { Header } from './component/Header';

import './styles/App.css';

function App() {
  const { result } = useAppSelector((state) => state.populations);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPrefList());
    dispatch(getPrefData(1));
  }, [dispatch]);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
