"use strict";

import * as React from 'react';
import * as ReactDOM from 'react-dom';

require('antd/dist/antd.less');

function DashboardApp(props) {
  return <div>Hello World</div>;
}

let rootElem = document.getElementById('root');
console.log('got root elem', rootElem);
ReactDOM.render(<DashboardApp />, rootElem);

