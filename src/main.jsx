import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { UserProvider } from './contexts/UserContext.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </UserProvider>
 </React.StrictMode>,
)
