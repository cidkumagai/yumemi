import { Header } from './component/Header';
import { Title } from './component/Title';
import { CreateCheckBox } from './component/CreateCheckBox';
import { CreateChart } from './component/CreateChart';

import './styles/App.css';

function App() {
  return (
    <>
      <Header />
      <Title />
      <CreateCheckBox />
      <CreateChart />
    </>
  );
}

export default App;
