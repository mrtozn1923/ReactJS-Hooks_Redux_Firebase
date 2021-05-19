import React from 'react';
import ReactDOM from 'react-dom';

const template=React.createElement('p',{},'hello react');
// const template=<p>hello react</p> //JSX yorumlayacak babel paketi yüklü değil
ReactDOM.render(template,document.getElementById('root'));