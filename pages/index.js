/*
import { userState } from 'react';

function Home() {
    return(
    <div> 
        <h1>Home da luci haha</h1>
        <Contador/>
    </div>
    )
}

function Contador() {
    const [contador, setContador] = userState(1);

    function adicionarContador() {
         setContador(contador + 1);         
     }
    return ( 
         <div>
             <div>{ contador }</div>
             <button onClick={adicionarContador}>Adicionar</button>
         </div>
    )
}

export default Home
*/

function precoUva(a,b) {
    return(a+b)
}

console.log("O preco do Carneiro é : ",precoUva(2,20))
var time = new Date();
console.log("Hora exata: ",time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
console.log("Teste, Teste, teste...")