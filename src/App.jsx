import { useContext } from 'react'
import './App.css'
import { PageDisplayedContext } from './contexts/PageDisplayedContext'

import Intro from './pages/Intro'
import Home from './pages/Home'

function App() {
  const pageDisplayedContext = useContext(PageDisplayedContext)

  const { pageDisplayed, setPageDisplayed } = pageDisplayedContext

  console.log(pageDisplayed)

  return (
    <div className='App'>
      <Home />
      {/* {pageDisplayed === 0 && <Intro />}
      {pageDisplayed === 1 && <Home />} */}
    </div>
  )
}

export default App
