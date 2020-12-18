import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NameForm from './app/NameForm';
import EssayForm from './app/EssayForm';
import FavoriteForm from './app/FavoriteForm';
import Reservation from './app/Reservation';
import WelcomeDialog from './app/WelcomeDialog';
import Calculator from './app/Calculator';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <div>
    <NameForm />
    <EssayForm />
    <FavoriteForm />
    <Reservation />
    <Calculator />
    <WelcomeDialog />
  </div>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
