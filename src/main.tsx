import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'

const rootEl = document.getElementById('root')!;

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

