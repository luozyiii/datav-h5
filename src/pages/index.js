import React, { useState, useEffect } from 'react';
import { Loading } from '@/components';

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
      {ready && <div>h5</div>}
    </div>
  );
}
