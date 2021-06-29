import React, { useState, useEffect, useRef } from 'react';
import { useChartHook } from '@/hooks';

import './index.less';

export default function (props) {
  const [pieList, setPieList] = useState([
    {
      name: useRef(null),
    },
    {
      name: useRef(null),
    },
    {
      name: useRef(null),
    },
  ]);

  function createOptions(title, value, values) {
    return {
      title: [
        {
          text: title,
          textStyle: {
            color: 'rgba(255,255,255,.3)',
            fontSize: 12,
          },
          top: 3,
        },
        {
          text: value,
          textStyle: {
            color: 'rgba(255,255,255)',
            fontSize: 16,
            fontWeight: 500,
          },
          top: '43%',
          left: '32%',
        },
      ],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      series: [
        {
          name: title,
          type: 'pie',
          radius: ['65%', '80%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: values[0],
              name: '数据',
              itemStyle: {
                color: 'rgb(0, 140, 217)',
              },
            },
            {
              value: values[1],
              name: '数据',
              itemStyle: {
                color: 'rgb(35, 69, 145)',
              },
            },
          ],
        },
      ],
    };
  }

  useChartHook(pieList[0].name, createOptions('转化率', '13%', [1000, 130]));
  useChartHook(pieList[1].name, createOptions('退单率', '5%', [1000, 50]));
  useChartHook(pieList[2].name, createOptions('跳失率', '43%', [1000, 430]));

  useEffect(() => {}, []);

  return (
    <div className="sales-pie">
      <div className="sales-pie-inner">
        {pieList.map((item, i) => (
          <div className="pie-item" key={i}>
            <div className="pie-item-inner" ref={item.name}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
