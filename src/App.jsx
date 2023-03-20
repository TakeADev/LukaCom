import { useContext } from 'react'
import './App.css'
import { AnimationContext } from './contexts/AnimationContext'

import Intro from './pages/Intro'
import Home from './pages/Home'

function App() {
  const animationContext = useContext(AnimationContext)

  const { animationIteration, setAnimationIteration } = animationContext

  return (
    <div className='App'>
      <Intro />
      <Home />
    </div>
  )
}

export default App
