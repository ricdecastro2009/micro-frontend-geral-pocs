import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

window.renderAppTwo = (containerId, history) => {
  ReactDOM.render(<App history={history} />, document.getElementById(containerId),
  );
  //serviceWorker.unregister();
};

window.unmountAppTwo = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('AppTwo-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
  //serviceWorker.unregister();
}