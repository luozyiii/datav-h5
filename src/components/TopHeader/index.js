import React, { useState, useEffect } from 'react';

import './index.less';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className="top-header">
      <div className="title">外卖大数据</div>
      <div className="sub-title">移动报表</div>
      <div className="date"></div>
    </div>
  );
}
