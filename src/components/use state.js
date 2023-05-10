
import React, { useState } from 'react'


const Rehan = () => {
  const [count, setCount] = useState(0);

  const update = () => {
setCount (count+1);
// alert ('bhai')
console.log('ummmmahhhh')
  }
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick= {update }>
        Click me 
      </button>
      
    </div>
  )
}

export default Rehan
