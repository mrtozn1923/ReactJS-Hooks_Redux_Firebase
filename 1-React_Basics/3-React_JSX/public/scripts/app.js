"use strict";

var root = document.getElementById('root');
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "My first react app!"), /*#__PURE__*/React.createElement("div", null, "Lorem, ipsum dolor.")); //React DOM

ReactDOM.render(template, root);
