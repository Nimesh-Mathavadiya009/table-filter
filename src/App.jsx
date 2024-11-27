import { useState } from 'react'
import './App.css'
import SearchFilter from './component/SearchFilter'

const demoItems = [
  {
    id: 1,
    name: "levi's"
  },
  {
    id: 2,
    name: "snitch"
  },
  {
    id: 3,
    name: "zudio"
  },
  {
    id: 4,
    name: "zara"
  },
]


function App() {
  const [items, setItems] = useState([...demoItems])

  return (
    <>
      <div id="root">
        <div id="main">
            <SearchFilter items={items} />
        </div>
      </div>
    </>
  )
}

export default App
