import { useState } from 'react'
 
export default function useActive(initialState=false) {
  
    const [active, setActive] = useState(initialState)

    const setTrue = () => setActive(true)

    const setFalse = () => setActive(false)
    
    const setToggle = () => setActive(!active)
    
return { active, setTrue, setFalse, setToggle }
  
}
