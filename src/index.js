import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';
import me from './me.jpg';
import github from './github.svg';
import linkedin from './linkedin.svg';
import home from './home.svg';
import email from './email.svg';

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
    <rect fill="white" stroke="#D3D3D3" strokeDasharray="1 4" x="0" y={innerHeight} width={innerWidth} height={innerHeight} />
    <line x1={innerWidth/2} y1="0" x2={innerWidth/2} y2={innerHeight*2} stroke="#D3D3D3" strokeWidth="0.5" strokeDasharray="1 4" />
    <line x1="0" y1={innerHeight/2} x2={innerWidth} y2={innerHeight/2} stroke="#D3D3D3" strokeWidth="0.5" strokeDasharray="1 4" />
    <line x1="0" y1={innerHeight+innerHeight/2} x2={innerWidth} y2={innerHeight+innerHeight/2} stroke="#D3D3D3" strokeWidth="0.5" strokeDasharray="1 4" />
  </g> : null;

  const image = <g>
    <image xlinkHref={me} width={imageWidth} />
  </g>;

  const detailsLine = (title, content, position) => <g>
    <text x={detailsOffsetX} y={detailsOffsetY+position*5}>{title}</text><text x={detailsOffsetX+25} y={detailsOffsetY+position*5}>{content}</text>
  </g>;
  const linksLine = (title, content, position) => <g>
    <image x={detailsOffsetX+70} y={detailsOffsetY+position*5+0.6} width="1.1mm" height="1.1mm" xlinkHref={title} /><text x={detailsOffsetX+8+68} y={detailsOffsetY+position*5}>{content}</text>
  </g>;

  const details = <g className={style.details}>
    <text x={innerWidth/2} className={style.name}>Richard Knoll</text>
    {detailsLine('Birthday:', 'February 13th, 1991', 0)}
    {detailsLine('Nationality:', 'Austrian', 1)}
    {detailsLine('Address:', 'London, SE1', 2)}
    {detailsLine('Phone:', <a href="tel:+447484830480" >+44 7484 830480</a>, 3)}
    {linksLine(github, <a href="https://github.com/rknoll" >github.com/rknoll</a>, 0)}
    {linksLine(linkedin, <a href="https://linkedin.com/in/richardknoll" >linkedin.com/in/richardknoll</a>, 1)}
    {linksLine(home, <a href="https://www.rknoll.at" >www.rknoll.at</a>, 2)}
    {linksLine(email, <a href="mailto:richard@rknoll.at" >richard@rknoll.at</a>, 3)}
  </g>;

  const nowOffset = 15;
  const yearOffset = 30;
  const yearSpacing = 34;

  const scale = (num) => (num - 30) / 34 * yearSpacing + yearOffset;

  const timelineHeight = yearOffset + yearSpacing * 7 - timelineOffsetY;

  const timelineLabels = [
    {
      label: 'now',
      top: nowOffset
    },
    {
      label: '2018',
      top: yearOffset
    },
    {
      label: '2017',
      top: yearOffset + yearSpacing
    },
    {
      label: '2016',
      top: yearOffset + yearSpacing * 2
    },
    {
      label: '2015',
      top: yearOffset + yearSpacing * 3
    },
    {
      label: '2014',
      top: yearOffset + yearSpacing * 4
    },
    {
      label: '2013',
      top: yearOffset + yearSpacing * 5
    },
    {
      label: '2012',
      top: yearOffset + yearSpacing * 6
    },
    {
      label: '2011',
      top: yearOffset + yearSpacing * 7
    }
  ];

  const indentationLevels = [
    20,
    26
  ];

  const jobs = [
    {
      name: 'Mantigma',
      from: 15,
      to: 90,
      indent: indentationLevels[1],
      color: '#db3236',
      first: true
    },
    {
      name: 'BJSS',
      from: 15,
      to: 40,
      indent: indentationLevels[0],
      color: '#4885ed',
      first: true
    },
    {
      name: 'IntraBase',
      from: 45,
      to: 65,
      indent: indentationLevels[0],
      color: '#f4c20d'
    },
    {
      name: '25th Floor',
      from: 78,
      to: 115,
      indent: indentationLevels[0],
      color: '#3cba54'
    },
    {
      name: 'Catalysts',
      from: 116,
      to: 238,
      indent: indentationLevels[1],
      color: '#f4c20d'
    },
    {
      name: 'Trotec',
      from: 128,
      to: 150,
      indent: indentationLevels[0],
      color: '#db3236'
    },
    {
      name: 'Otto Bock',
      from: 180,
      to: 197,
      indent: indentationLevels[0],
      color: '#4885ed'
    }
  ];

  const bracketLineWidth = 0.8;
  const bracketBarWidth = 2;

  const timelineLineWidth = 0.5;
  const timelineBarWidth = 1;

  const bracket = (x, y, height, color, last, first) => <g>
    <rect x={x} y={y} width={bracketBarWidth} height={height} fill={color} />
    {first ? null : <line x1="15.5" y1={y+bracketLineWidth/2} x2={x+bracketBarWidth} y2={y+bracketLineWidth/2} stroke={color} strokeWidth={bracketLineWidth} />}
    {last ? null : <line x1="15.5" y1={y+height-bracketLineWidth/2} x2={x+bracketBarWidth} y2={y+height-bracketLineWidth/2} stroke={color} strokeWidth={bracketLineWidth} />}
  </g>;

  const timeline = <g transform={`translate(0,${timelineOffsetY})`} className={style.timeline}>
    <text className={style.title}>Timeline</text>
    <line x1="15" y1="15" x2="15" y2={timelineOffsetY+timelineHeight} stroke="black" strokeWidth={timelineBarWidth} />
    {timelineLabels.map(({label, top}) => <g className={style.axis}>
      <line x1="11" y1={top+timelineLineWidth/2} x2={15+timelineBarWidth/2} y2={top+timelineLineWidth/2} stroke="black" strokeWidth={timelineLineWidth} />
      <text y={top}>{label}</text>
    </g>)}
    {jobs.map(({indent, from, to, color, last, first}) => bracket(indent, scale(from), scale(to) - scale(from), color, last, first))}
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
