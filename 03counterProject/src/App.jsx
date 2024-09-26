import { useState } from 'react' //useState is a hook
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15) //useState(15) same as : let counter = 15

  const addValue = () =>{
    if(counter>=20){
      alert("Limit exceeded")
    }
    else{
      setCounter( prevCounter => prevCounter + 1 )
    }
  }
  const removeValue = () => {
    if(counter<=0){
      alert("Limit reached")
    }
    else{
      setCounter(prevCounter => prevCounter - 1 )
    }
    
  }

  return (
    <>
      <h1>Navya's project</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button> <br></br><br></br>
      <button onClick={removeValue}>Remove value </button>
    </>
  )
}

export default App

/*
NOTE: by using 
    setCounter(counter++);
    setCounter(counter++);
    setCounter(counter++);
    setCounter(counter++);
--> the counter is updated only once 
    bec react perform these operations as a single "batch" to optimize performance 
--> The counter value is incremented four times, but  React only sees the final value after the increments, resulting in a single update.

to fix this, use :
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);

*/