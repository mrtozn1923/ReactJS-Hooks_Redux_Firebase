"use strict";

var root = document.getElementById('root');
var number = 0;

function addOne() {
  number++;
  renderApp();
}

function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Number:", number), /*#__PURE__*/React.createElement("button", {
    id: "btnPlusOne",
    className: "btnRed",
    onClick: addOne
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    id: "btnMinusOne",
    className: "btnBlue",
    onClick: function onClick() {
      number--;
      renderApp();
    }
  }, "-1"));
  ReactDOM.render(template, root);
}

renderApp();
