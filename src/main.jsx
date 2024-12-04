import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './components/Stor/store.js'
import "./tailwind/style.css"
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "././components/ThemeProvider.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </BrowserRouter>
    </Provider>
)


