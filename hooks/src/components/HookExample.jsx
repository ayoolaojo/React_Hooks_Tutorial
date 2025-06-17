import React, { useEffect } from 'react'

const HookExample = () => {
       useEffect ( ()=> {console.log("rerendered");
        return console.log("unmounted")
       }, [])
    
  return (
    <div>
      Hook Example
    </div>
  )
}

export default HookExample
