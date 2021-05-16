"use strict";

var root = document.getElementById('root'); //JSX-Javascript XML

var template = /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "My first react app!"); //React DOM

ReactDOM.render(template, root);
