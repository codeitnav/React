import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive"); // default color is olive

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor : color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button 
          onClick={() => setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor:"red"}}>Red</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button 
          onClick={() => setColor("green")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor:"green"}}>Green</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button onClick={() => setColor("blue")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor:"blue"}}>Blue</button>
        </div>
      </div>
    </div>
  );
}

export default App;

/* 
1. Since there are already double curly braces in "style={{ backgroundColor: color }}",
the variable name "color" is written directly inside the second pair of braces.

2. onClick demands a function in return. but setColor() func may give either a value or func anything.
So, we used a callback func to make sure a func is returned
*/
