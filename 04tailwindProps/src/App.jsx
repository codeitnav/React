import './App.css'
import Card from './components/Card'
function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      <Card 
      username="navya" 
      btnText="click for some danger"
      />
      <Card 
      username="sriv" 
      btnText="click on your own risk"  />


    </>
  )
}

export default App

// btnText="click for some danger"
/*
props make the components reusable
*/