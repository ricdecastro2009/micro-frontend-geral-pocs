import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


window.renderAppOne = (containerId, history) => {
  console.log("Render APP ONE");
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountAppOne = containerId => {
  console.log("Unmount APP ONE");
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('AppOne-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}