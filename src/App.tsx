import { Helmet } from 'react-helmet';

import { useAppSelector } from './store/hooks';

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
      <Helmet>
        <title>都道府県別人口推移</title>
        <meta name="description" content="フロントエンドコーディング試験への挑戦です。" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
      </Helmet>
      <Header />
      <CustomContent>
        <section>
          <Title />
          <CreateCheckBox />
        </section>
        <section>
          <CreateChart />
        </section>
      </CustomContent>
    </>
  );
}

export default App;
