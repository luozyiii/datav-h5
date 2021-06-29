import React, { useRef, useEffect } from 'react';
import { useChartHook } from '@/hooks';

import './index.less';

export default function (props) {
  const chartRef = useRef(null);

  const getOptions = (data = []) => {
    return {
      title: {
        text: '今日销售额：253,089.10元',
        textStyle: {
          color: '#fff',
        },
        top: 10,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
        },
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          color: '#fff',
        },
        data: ['南京', '深圳', '杭州', '上海', '北京', '全国'],
      },
      series: [
        {
          name: '平台流量',
          type: 'bar',
          data: [68203, 73489, 79034, 204970, 231744, 630230],
        },
        {
          name: '外部流量',
          type: 'bar',
          data: [49325, 53438, 61000, 221594, 234141, 681807],
          itemStyle: {
            color: 'rgb(0, 140, 217)',
          },
        },
      ],
    };
  };

  useChartHook(chartRef, getOptions());

  useEffect(() => {}, []);

  return (
    <div className="sales-bar">
      <div className="sales-bar-inner" ref={chartRef}></div>
    </div>
  );
}
