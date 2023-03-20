import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AnimationContextProvider } from './contexts/AnimationContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimationContextProvider>
      <App />
    </AnimationContextProvider>
  </React.StrictMode>
)
