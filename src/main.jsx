import React from 'react'
import App from './App.jsx'
import './index.css'
import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render((
   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
   </BrowserRouter>))
