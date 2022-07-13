// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   return <button onClick={increment}>I have been clicked {count} times</button>;
// }

// export default Counter;
import React,{useState} from "react";
function Counter(){
  const[count, setCount]=useState(0);

  function increment(){
    setCount(count +1);
 }
    function decrement(){
      setCount (count -1);
    }
 
  return(
    <button onClick={increment}>i have been clicked {count} times</button>,
    <button onClick={decrement}>i have been clicked {count} times</button>

  )
}
export default Counter;
