var root=document.getElementById('root');

var product={
   name:"Samsung S8",
   price:4000,
   description:"Akıllı Telefon"
}

function getDescription(description){
   if(description){
      return <p id="product-desc">Açıklama: {description}</p>;
   }
}

var template=(
   <div id="product-details">
      <h2 id="product-name">Ürün Adı:{product.name?product.name:'Ürün adı yok'}</h2>
      <p id="product-price">Fiyat: {product.price==0?'Ücretsiz':product.price}</p>
      {getDescription(product.description)}
   </div>
);

ReactDOM.render(template,root);