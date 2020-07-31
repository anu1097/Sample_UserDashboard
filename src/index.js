import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { JEditor } from './package/index';
import 'antd/dist/antd.css';

// import {jeditor} from "../package/index.js";

const mock = [
  { name: '字符串', mock: '@string' },
  { name: '自然数', mock: '@natural' },
  { name: '浮点数', mock: '@float' },
  { name: '字符', mock: '@character' },
  { name: '布尔', mock: '@boolean' },
  { name: 'url', mock: '@url' },
  { name: '域名', mock: '@domain' },
  { name: 'ip地址', mock: '@ip' },
  { name: 'id', mock: '@id' },
  { name: 'guid', mock: '@guid' },
  { name: '当前时间', mock: '@now' },
  { name: '时间戳', mock: '@timestamp' },
];

// const JEditor = jeditor({ mock: mock });

ReactDOM.render(
  <React.StrictMode>
    <br />
    <h2>Example:</h2>
    <hr />

    <JEditor
      showEditor={true}
      isMock={false}
      data={''}
      onChange={(e) => {
        console.log('changeValue', e);
      }}
      mock={mock}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
