import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { useAppSelector } from '../app/hooks';

type PrefectureData = {
  prefCode: number;
  prefName: string;
  isChecked: boolean;
  prefData: number[] | null;
};

function createOptions(result: PrefectureData[] | undefined, period: number[] | undefined) {
  if (period && result) {
    const series = result
      .map((pref) => {
        if (pref.isChecked) {
          return {
            type: 'line',
            name: pref.prefName,
            data: pref.prefData,
          };
        }
        return null;
      })
      .filter((e) => e !== null);
    const options = {
      title: { text: '都道府県別総人口推移' },
      xAxis: {
        title: {
          text: '年度',
        },
        categories: period,
      },
      yAxis: {
        title: {
          text: '人口数',
        },
      },
      tooltip: {
        valueSuffix: '人',
      },
      series: series,
    };
    return options;
  }
}

export const CreateChart = () => {
  const { result, period } = useAppSelector((state) => state.populations);
  const options = createOptions(result, period);
  return (
    <>
      {options?.series !== null && (
        <HighchartsReact highcharts={Highcharts} options={options} immutable={true} />
      )}
    </>
  );
};
