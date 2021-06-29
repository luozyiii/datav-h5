import React, { useRef, useEffect } from 'react';
import { useChartHook } from '@/hooks';

import './index.less';

export default function (props) {
  const chartRef = useRef(null);

  const getOptions = (data = []) => {
    return {
      title: {
        text: '分时访问&成交趋势图',
        textStyle: {
          color: '#fff',
        },
        left: 10,
        top: 10,
      },
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '08:00', '16:00', '24:00'],
        axisLabel: {
          color: 'rgba(255,255,255,.3)',
        },
        axisLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: 'rgba(255,255,255,.3)',
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
      },
      series: [
        {
          name: '访问量',
          type: 'line',
          smooth: true,
          itemStyle: {
            opacity: 0,
            color: 'rgb(0, 163, 233)',
          },
          data: [151, 532, 901, 344],
        },
        {
          name: '成交量',
          type: 'line',
          smooth: true,
          itemStyle: {
            opacity: 0,
            color: 'yellow',
          },
          data: [320, 1732, 501, 334],
        },
        {
          name: 'KPI',
          type: 'line',
          smooth: true,
          itemStyle: {
            opacity: 0,
            color: 'red',
          },
          data: [900, 900, 900, 900],
        },
      ],
    };
  };

  useChartHook(chartRef, getOptions());

  useEffect(() => {}, []);

  return (
    <div className="sales-line">
      <div className="sales-line-inner" ref={chartRef}></div>
    </div>
  );
}
