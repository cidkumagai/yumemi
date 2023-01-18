export type ResponsePrefectureList = {
  message: null;
  result: [
    {
      prefCode: number;
      prefName: string;
    },
  ];
};

export type PrefectureData = {
  prefCode: number;
  prefName: string;
  isChecked: boolean;
  prefData: number[] | null;
};

export type ResponsePrefectureData = {
  message: null;
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
};

export type PopulationState = {
  result?: PrefectureData[];
  period?: number[];
}