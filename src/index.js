import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import data from './data.json'

const root = ReactDOM.createRoot(document.getElementById('root'));

const bookData = data.Travel?.map( (record) => {
  return (
    <>
    <h1>{record.bookTitle}</h1>
    <p>{record.bookDescription}</p>
    </>
  )
})
root.render(
  bookData
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
