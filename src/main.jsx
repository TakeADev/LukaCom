import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PageDisplayedProvider } from './contexts/PageDisplayedContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageDisplayedProvider>
      <App />
    </PageDisplayedProvider>
  </React.StrictMode>
)
