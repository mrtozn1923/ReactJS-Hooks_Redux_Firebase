"use strict";

var root = document.getElementById('root');
var product = {
  name: "Samsung S8",
  price: 5000,
  description: "Akıllı Telefon"
};

function formatPrice(p) {
  return p.price + ' TL';
}

var template = /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "\xDCr\xFCn Ad\u0131:", product.name), /*#__PURE__*/React.createElement("p", {
  id: "product-price"
}, "Fiyat: ", formatPrice(product)), /*#__PURE__*/React.createElement("p", {
  id: "product-description"
}, "A\xE7\u0131klama: ", product.description));
ReactDOM.render(template, root);
