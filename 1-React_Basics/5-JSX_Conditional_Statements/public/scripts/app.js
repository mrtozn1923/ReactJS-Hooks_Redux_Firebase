"use strict";

var root = document.getElementById('root');
var product = {
  name: "Samsung S8",
  price: 4000,
  description: "Akıllı Telefon"
};

function getDescription(description) {
  if (description) {
    return /*#__PURE__*/React.createElement("p", {
      id: "product-desc"
    }, "A\xE7\u0131klama: ", description);
  }
}

var template = /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "\xDCr\xFCn Ad\u0131:", product.name ? product.name : 'Ürün adı yok'), /*#__PURE__*/React.createElement("p", {
  id: "product-price"
}, "Fiyat: ", product.price == 0 ? 'Ücretsiz' : product.price), getDescription(product.description));
ReactDOM.render(template, root);
