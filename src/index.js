import React from 'react';
import ReactDOM from 'react-dom';

const title = 'FPL Stats';
const test = 'test';

ReactDOM.render(
    <div>
        <div>{title}</div>
        <div>{test}</div>
    </div>,
  document.getElementById('app')
);


module.hot.accept();