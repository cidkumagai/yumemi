export type ResponsePrefectureList = {
  message: null | string;
  result: [
    {
      prefCode: number;
      prefName: string;
    },
  ];
  statusCode?: string;
};

export type PrefectureData = {
  prefCode: number;
  prefName: string;
  isChecked: boolean;
  prefData: number[] | null;
};

export type ResponsePrefectureData = {
  message: null | string;
  result: {
    boundaryYear: number;
    data: [
      {
        label: string;
        data: [
          {
            year: number;
            value: number;
          },
        ];
      },
    ];
  };
  statusCode?: string;
};

export type PopulationState = {
  result?: PrefectureData[];
  period?: number[];
  error?: string;
};
