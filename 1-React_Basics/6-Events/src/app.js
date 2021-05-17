var root=document.getElementById('root');
var number=0;

function addOne(){
   console.log('add one');
}

// var minusOne=()=>{
//    console.log('minus one');
// }

var template=(
   <div>
      <h1>Number:{number}</h1>
      <button id="btnPlusOne" className="btnRed" onClick={addOne}>+1</button>
      <button id="btnMinusOne" className="btnBlue" 
         onClick={()=>{
            console.log('minus one');
         }}>-1
      </button>
   </div>
);

ReactDOM.render(template,root);