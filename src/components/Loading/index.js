import React, { Component } from 'react';
import './index.less';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      width = 50,
      height = 50,
      outsideColor = '#3be6cb',
      insideColor = '#02bcfe',
      duration = 2,
      children,
    } = this.props;
    const outsideColorAnimation = `${outsideColor};${insideColor};${outsideColor}`;
    const insideColorAnimation = `${insideColor};${outsideColor};${insideColor}`;
    return (
      <div className="m-loading">
        <svg width={width} height={height} viewBox="0 0 50 50">
          {/* strokeDasharray = 2pir/4 = 2*3.1415926*22 = 34 */}
          {/* from="0 25 25" to="360 25 25" 等价于 values="0 25 25;360 25 25" */}
          <circle
            cx="25"
            cy="25"
            r="22"
            fill="none"
            strokeWidth="3"
            stroke={outsideColor}
            strokeDasharray="34 34"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 25 25;360 25 25"
              dur={`${duration}s`}
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="stroke"
              values={outsideColorAnimation}
              dur={`${+duration * 2}s`}
              repeatCount="indefinite"
            ></animate>
          </circle>
          <circle
            cx="25"
            cy="25"
            r="12"
            fill="none"
            strokeWidth="3"
            stroke={insideColor}
            strokeDasharray="19 19"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="360 25 25;0 25 25"
              dur={`${duration}s`}
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="stroke"
              values={insideColorAnimation}
              dur={`${+duration * 2}s`}
              repeatCount="indefinite"
            ></animate>
          </circle>
        </svg>
        {children && <div className="content">{children}</div>}
      </div>
    );
  }
}
