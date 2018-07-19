import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';
import me from './me.jpg';
import github from './github.svg';
import linkedin from './linkedin.svg';
import home from './home.svg';
import email from './email.svg';
import moment from 'moment';

const width = 210;
const height = 297;
const outline = 20;
const imageWidth = 30;

const detailsOffsetX = 40;
const detailsOffsetY = 12;

const timelineOffsetY = 55;

const showGutter = false;

const innerWidth = width - 2 * outline;
const innerHeight = height - 2 * outline;

const pages = 2;

const Index = () => {
  const gutter = showGutter ? <g>
    <rect fill="white" stroke="#D3D3D3" strokeDasharray="1 4" x="0" y="0" width={innerWidth} height={innerHeight} />
    <rect fill="white" stroke="#D3D3D3" strokeDasharray="1 4" x="0" y={innerHeight} width={innerWidth}
          height={innerHeight} />
    <line x1={innerWidth / 2} y1="0" x2={innerWidth / 2} y2={innerHeight * 2} stroke="#D3D3D3" strokeWidth="0.5"
          strokeDasharray="1 4" />
    <line x1="0" y1={innerHeight / 2} x2={innerWidth} y2={innerHeight / 2} stroke="#D3D3D3" strokeWidth="0.5"
          strokeDasharray="1 4" />
    <line x1="0" y1={innerHeight + innerHeight / 2} x2={innerWidth} y2={innerHeight + innerHeight / 2} stroke="#D3D3D3"
          strokeWidth="0.5" strokeDasharray="1 4" />
  </g> : null;

  const image = <g>
    <image xlinkHref={me} width={imageWidth} />
  </g>;

  const detailsLine = (title, content, position) => <g>
    <text x={detailsOffsetX} y={detailsOffsetY + position * 5}>{title}</text>
    <text x={detailsOffsetX + 25} y={detailsOffsetY + position * 5}>{content}</text>
  </g>;
  const linksLine = (title, content, position) => <g>
    <image x={detailsOffsetX + 70} y={detailsOffsetY + position * 5 + 0.6} width="1.1mm" height="1.1mm"
           xlinkHref={title} />
    <text x={detailsOffsetX + 8 + 68} y={detailsOffsetY + position * 5}>{content}</text>
  </g>;

  const details = <g className={style.details}>
    <text x={innerWidth / 2} className={style.name}>Richard Knoll</text>
    {detailsLine('Birthday:', 'February 13th, 1991', 0)}
    {detailsLine('Nationality:', 'Austrian', 1)}
    {detailsLine('Address:', 'London, SE1', 2)}
    {detailsLine('Phone:', <a href="tel:+447484830480">+44 7484 830480</a>, 3)}
    {linksLine(github, <a href="https://github.com/rknoll">github.com/rknoll</a>, 0)}
    {linksLine(linkedin, <a href="https://linkedin.com/in/richardknoll">linkedin.com/in/richardknoll</a>, 1)}
    {linksLine(home, <a href="https://www.rknoll.at">www.rknoll.at</a>, 2)}
    {linksLine(email, <a href="mailto:richard@rknoll.at">richard@rknoll.at</a>, 3)}
  </g>;

  const nowOffset = 15;
  const timelineScaling = 700000000;
  const now = moment();

  const since = (date, format) => nowOffset + now.diff(moment(date, format)) / timelineScaling;

  const labelFor = (year) => ({
    label: year,
    top: since(year, 'YYYY')
  });

  const timelineLabels = [{
    label: 'now',
    top: since(now)
  }];

  for (let year = 2018; year >= 2011; --year) {
    timelineLabels.push(labelFor(`${year}`));
  }

  const timelineHeight = timelineLabels[timelineLabels.length - 1].top - timelineOffsetY;

  const indentationLevels = [
    20,
    26,
    32,
    38
  ];

  const jobs = [
    {
      from: since('09/2017', 'MM/YYYY'),
      to: since(now),
      indent: indentationLevels[1],
      color: '#3cba54',
      height: 20,
      render: ({ color }) => <text fill={color}>
        BJSS
      </text>,
    },
    {
      from: since('03/2016', 'MM/YYYY'),
      to: since(now),
      indent: indentationLevels[0],
      color: '#db3236',
      height: 20,
      render: ({ color }) => <text fill={color}>
        Mantigma
      </text>,
    },
    {
      from: since('01/2017', 'MM/YYYY'),
      to: since('07/2017', 'MM/YYYY'),
      indent: indentationLevels[1],
      color: '#f4c20d',
      height: 20,
      render: ({ color }) => <text fill={color}>
        IntraBase
      </text>,
    },
    {
      from: since('09/2015', 'MM/YYYY'),
      to: since('10/2016', 'MM/YYYY'),
      indent: indentationLevels[1],
      color: '#4885ed',
      height: 20,
      render: ({ color }) => <text fill={color}>
        25th Floor
      </text>,
    },
    {
      from: since('02/2015', 'MM/YYYY'),
      to: since('08/2015', 'MM/YYYY'),
      indent: indentationLevels[2],
      color: '#db3236',
      height: 20,
      render: ({ color }) => <text fill={color}>
        LineMetrics
      </text>,
    },
    {
      from: since('07/2014', 'MM/YYYY'),
      to: since('03/2015', 'MM/YYYY'),
      indent: indentationLevels[3],
      color: '#4885ed',
      height: 20,
      render: ({ color }) => <text fill={color}>
        Trotec
      </text>,
    },
    {
      from: since('12/2011', 'MM/YYYY'),
      to: since('08/2015', 'MM/YYYY'),
      indent: indentationLevels[1],
      color: '#f4c20d',
      height: 20,
      render: ({ color }) => <text fill={color}>
        Catalysts
      </text>,
    },
    {
      from: since('10/2013', 'MM/YYYY'),
      to: since('08/2015', 'MM/YYYY'),
      indent: indentationLevels[0],
      color: '#3cba54',
      height: 20,
      render: ({ color }) => <text fill={color}>
        Embedded Systems Design
      </text>,
    },
    {
      from: since('02/2013', 'MM/YYYY'),
      to: since('08/2013', 'MM/YYYY'),
      indent: indentationLevels[2],
      color: '#3cba54',
      height: 20,
      render: ({ color }) => <text fill={color}>
        Otto Bock
      </text>,
    },
    {
      from: since('09/2012', 'MM/YYYY'),
      to: since('02/2013', 'MM/YYYY'),
      indent: indentationLevels[3],
      color: '#db3236',
      height: 20,
      render: ({ color }) => <text fill={color}>
        Erasmus Switzerland
      </text>,
    },
    {
      from: since('03/2011', 'MM/YYYY'),
      to: since('08/2013', 'MM/YYYY'),
      indent: indentationLevels[0],
      color: '#4885ed',
      height: 20,
      render: ({ color }) => <text fill={color}>
        Hardware Software Design
      </text>,
    }
  ];

  const bracketBarWidth = 2;

  const timelineLineWidth = 0.5;
  const timelineBarWidth = 1;

  const bracket = ({ indent, from, to, color }) =>
    <rect x={indent} y={to} width={bracketBarWidth} ry={bracketBarWidth / 2} height={from - to} fill={color} />;

  let currentPos = since(now);

  const description = (job) => {
    const { indent, render, to, height, color } = job;
    const pos = Math.max(currentPos, to);

    currentPos = pos + height;

    return <g>
      <line x1={indent + bracketBarWidth / 2} x2={innerWidth} y1={pos + 2} y2={pos + 2}
            stroke={color}
            strokeWidth={0.5}
            strokeDasharray="2 2" />
      <g transform={`translate(${50},${pos + 3})`}>
        {render(job)}
      </g>
    </g>;
  };

  const timeline = <g transform={`translate(0,${timelineOffsetY})`} className={style.timeline}>
    <text className={style.title}>Timeline</text>
    <line x1="15" y1="15" x2="15" y2={timelineOffsetY + timelineHeight} stroke="black" strokeWidth={timelineBarWidth} />
    {timelineLabels.map(({ label, top }) => <g className={style.axis}>
      <line x1="11" y1={top + timelineLineWidth / 2} x2={15 + timelineBarWidth / 2} y2={top + timelineLineWidth / 2}
            stroke="black" strokeWidth={timelineLineWidth} />
      <text y={top}>{label}</text>
    </g>)}
    {jobs.map((job) => <g>
      {description(job)}
    </g>)}
    {jobs.map((job) => <g>
      {bracket(job)}
    </g>)}
  </g>;

  const content = (page) =>
    <svg width={`${innerWidth}mm`} height={`${innerHeight}mm`}
         viewBox={`0 ${innerHeight * page} ${innerWidth} ${innerHeight}`}>
      {gutter}
      {image}
      {details}
      {timeline}
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
