import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import VideoGrid from './components/VideoGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <VideoGrid />
    </>
  )
}

export default App
