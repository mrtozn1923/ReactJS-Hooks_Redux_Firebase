var root=document.getElementById('root');

var product={
   name:"Samsung S8",
   price:5000,
   description:"Akıllı Telefon"
}

function formatPrice(p){
   return p.price+' TL';
}

var template=(
   <div id="product-details">
      <h2 id="product-name">Ürün Adı:{product.name}</h2>
      <p id="product-price">Fiyat: {formatPrice(product)}</p>
      <p id="product-description">Açıklama: {product.description}</p>
   </div>

);

ReactDOM.render(template,root);