import { Header } from './component/Header';
import { Title } from './component/Title';
import { CreateCheckBox } from './component/CreateCheckBox';
import { CreateChart } from './component/CreateChart';

import './styles/App.css';
import { CustomContent } from './component/CustomContent';

function App() {
  return (
    <>
      <Header />
      <CustomContent>
        <Title />
        <CreateCheckBox />
        <CreateChart />
      </CustomContent>
    </>
  );
}

export default App;
