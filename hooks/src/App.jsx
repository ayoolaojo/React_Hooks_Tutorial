import { useEffect, useState } from 'react'


import './App.css'
import HookExample from './components/HookExample'

function App() {

 const [count,setCount] = useState (0)
 const handleIncrease = () => {
   setCount(count+1)
 }

 const handleDecrease = () => {
   setCount(count-1)
 }

 const [inputValue, setInputValue] =useState("")
 const [toggle , setToggle] = useState(true)

   useEffect (()=>{console.log("rerendered")}, [count])

 

  return <div>
    <p>You clicked {count} times</p>
    <button onClick={handleIncrease}>Increment</button>
    <button onClick={handleDecrease}>Decrease</button> <br /> <br />

     <input type="text" placeholder='enter a text....' value = {inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
     <p>You typed: <b>{inputValue}</b></p>

        { toggle && <HookExample/>}
        <button onClick={()=>setToggle(!toggle)} >Toggle</button>
          
  </div>

        
  
    
  
}

export default App
