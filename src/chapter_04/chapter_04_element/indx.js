import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // 해당 파일이 없으면 제거하거나 올바르게 생성
import reportWebVitals from './reportWebVitals'; // 사용하지 않는다면 제거 가능

import Library from './chapter_03/Library'; // 올바른 경로를 지정하거나 필요 없으면 제거
import Clock from './chapter_04_element/Clock';

setInterval(() => {
    ReactDOM.render(
        <React.StrictMode>
            <Clock />
        </React.StrictMode>,
        document.getElementById('root')
    );
}, 1000);