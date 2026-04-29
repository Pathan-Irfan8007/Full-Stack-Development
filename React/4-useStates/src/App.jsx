import './App.css'
import Counter from './components/Counter'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  return (
    <>
      <h2>Hello</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>Button</button><br /><hr /><br />

      <Counter/>
    </>
  )
}

export default App
