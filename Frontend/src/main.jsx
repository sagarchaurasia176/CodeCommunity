import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import MainContextPage from './context/MainContextPage.jsx'
import toast, { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <MainContextPage>
    <BrowserRouter>
{/* contextprovider apply here */}
    <App />
    <Toaster/>
    </BrowserRouter>
    </MainContextPage>
  </React.StrictMode>,
)
