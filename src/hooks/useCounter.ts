import { useState } from 'react'

export const useCounter = () => {
  const [counter, setCounter] = useState<number>(1)
  
  const incrementCounter = () => {
    setCounter(counter + 1)
  }
 
  const decrementCounter = () => {
    setCounter(counter - 1)
  }

  return {
    counter,
    incrementCounter,
    decrementCounter
  }
}