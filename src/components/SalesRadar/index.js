import React, { useRef } from 'react';
import { useChartHook } from '@/hooks';

import './index.less';

export default function (props) {
  const chartRef = useRef(null);

  const getOptions = () => {
    return {
      tooltip: {},
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5],
          },
        },
        indicator: [
          {
            name: '订单量',
            max: 6500,
          },
          {
            name: '骑手量',
            max: 16000,
          },
          {
            name: '访问量',
            max: 30000,
          },
          {
            name: '客服',
            max: 38000,
          },
          {
            name: '配送',
            max: 52000,
          },
          {
            name: '热度',
            max: 25000,
          },
        ],
      },
      series: [
        {
          name: '运营指标',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预期',
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际',
            },
          ],
        },
      ],
    };
  };

  useChartHook(chartRef, getOptions());

  return (
    <div className="sales-radar">
      <div className="sales-radar-inner" ref={chartRef}></div>
    </div>
  );
}
