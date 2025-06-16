import { useState } from 'react'


import './App.css'

function App() {

 const [count,setCount] = useState (0)
 const handleIncrease = () => {
   setCount(count+1)
 }

 const handleDecrease = () => {
   setCount(count-1)
 }

 

  return <div>
    <p>You clicked {count} times</p>
    <button onClick={handleIncrease}>Increment</button>
    <button onClick={handleDecrease}>Decrease</button>
  </div>
  
    
  
}

export default App
