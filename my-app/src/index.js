import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const App3 = () => (
  <div>
    <h1>Olá, mundoss!</h1>
  </div>
);

function App2(props) {
  console.log(props)
  return (
    <div>
      <h1>Olá, {props.name}!</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 name="Pedro" xpto="123123" abcd={2} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
