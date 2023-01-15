import { Header } from './component/Header';
import { Title } from './component/Title';
import { CreateCheckBox } from './component/CreateCheckBox';
import { CreateChart } from './component/CreateChart';

import './styles/App.css';
import { useAppSelector } from './app/hooks';

function App() {
    const { isLoad } = useAppSelector((state) => state.populations);

  return (
    <>
      {isLoad.toString()}
      <Header />
      <Title />
      <CreateCheckBox />
      <CreateChart />
    </>
  );
}

export default App;
