var root=document.getElementById('root');
var number=0;

function addOne(){
   number++;
   renderApp();
}

function renderApp(){
   var template=(
      <div>
         <h1>Number:{number}</h1>
         <button id="btnPlusOne" className="btnRed" onClick={addOne}>+1</button>
         <button id="btnMinusOne" className="btnBlue" 
            onClick={()=>{
               number--;
               renderApp();
            }}>-1
         </button>
      </div>
   );
   ReactDOM.render(template,root);
}

renderApp();
