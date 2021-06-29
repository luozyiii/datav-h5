import React, { useState, useEffect } from 'react';
import {
  Loading,
  TopHeader,
  SalesBar,
  SalesLine,
  SalesPie,
  SalesMap,
  SalesSun,
  SalesRadar,
} from '@/components';

import './index.less';

export default function IndexPage() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []);
  return (
    <div className="home">
      {!ready && <Loading>数据加载中...</Loading>}
      {ready && (
        <div className="home">
          <div className="data-wrapper" />
          <TopHeader />
          <SalesBar />
          <SalesLine />
          <SalesPie />
          <SalesMap />
          <SalesSun />
          <SalesRadar />
        </div>
      )}
    </div>
  );
}
