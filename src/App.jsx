import { useContext } from 'react'
import './App.css'
import Intro from './components/Intro'
import { PageDisplayedContext } from './contexts/PageDisplayedContext'

function App() {
  const pageDisplayedContext = useContext(PageDisplayedContext)

  const { pageDisplayed, setPageDisplayed } = pageDisplayedContext

  console.log(pageDisplayed)

  return <div className='App'>{pageDisplayed === 0 && <Intro />}</div>
}

export default App
