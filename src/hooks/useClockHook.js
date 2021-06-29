import React, { useState, useEffect } from 'react';

export default function (props) {
  let now = new Date();
  const [date, setDate] = useState(dateFilter(now));
  const [time, setTime] = useState(timeFilter(now));

  function dateFilter(v) {
    let m = v.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    let d = v.getDate();
    d = d < 10 ? '0' + d : d;
    return v.getFullYear() + '-' + m + '-' + d;
  }

  function timeFilter(v) {
    let h = v.getHours();
    h = h < 10 ? '0' + h : h;
    let m = v.getMinutes();
    m = m < 10 ? '0' + m : m;
    let s = v.getSeconds();
    s = s < 10 ? '0' + s : s;
    return h + ':' + m + ':' + s;
  }

  let task;
  const start = () => {
    task = setInterval(() => {
      console.log('11');
      now = new Date();
      setDate(dateFilter(now));
      setTime(timeFilter(now));
    }, 1000);
  };

  start();

  return {
    date,
    time,
    start,
  };
}
