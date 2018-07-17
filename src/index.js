import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';

const width = 210;
const height = 297;
const outline = 20;

const innerWidth = width - 2 * outline;
const innerHeight = height - 2 * outline;

const pages = 2;

const Index = () => {
  const content = (page) =>
    <svg width={`${innerWidth}mm`} height={`${innerHeight}mm`}
         viewBox={`0 ${innerHeight * page} ${innerWidth} ${innerHeight}`}>
      <rect fill="white" stroke="#D3D3D3" x="0" y="0" width={innerWidth} height={innerHeight * 2} />
      <text x="0" y="0">Richard Knoll</text>
    </svg>;

  return <div className={style.book}>
    {[...Array(pages).keys()].map((page) => <div className={style.page} key={page}>
      <div className={style.subpage}>
        {content(page)}
      </div>
    </div>)}
  </div>;
};

ReactDOM.render(<Index />, document.getElementById('index'));
