import React, { useState } from 'react';
import Header from './Header';

function App() {
   const [counter, setCounter] = useState(0);

   // Estado e Imutabilidade 
   // useState retorna = [valor, function]

   function increment (){
     setCounter(counter + 1);
   }

   return (
      <>
         <Header title ="RocketSeat">
            Contador : { counter }
         </Header>
         <button onClick= {increment} > Incrementar </button>
      </>
   );
}

export default App;
