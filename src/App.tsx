import { useAppSelector } from './app/hooks';

import { Header } from './component/Header';
import { Title } from './component/Title';
import { CreateCheckBox } from './component/CreateCheckBox';
import { CreateChart } from './component/CreateChart';
import { CustomContent } from './component/CustomContent';
import { CustomError } from './component/CustomError';

function App() {
  const { error } = useAppSelector((state) => state.populations);
  if (error !== undefined) {
    return <CustomError message={error} />;
  }
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
