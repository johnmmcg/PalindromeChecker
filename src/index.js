import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Container from './Container.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Container />, document.getElementById('root'));
registerServiceWorker();
