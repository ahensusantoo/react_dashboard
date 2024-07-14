import { useState } from 'react'
import './App.css'
import Sidebar from './components/SidebarSection/Sidebar'
import Body from './components/BodySection/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Sidebar/>
      <Body/>
    </div>
  )
}

export default App
