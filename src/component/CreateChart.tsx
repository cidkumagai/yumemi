import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { useAppSelector } from '../app/hooks';
import { PrefectureData } from '../types/types';

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
      title: { text: '' },
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
