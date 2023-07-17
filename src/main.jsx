import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import productReducer from './features/ItemStore'
import cartReducer from './features/cartStore'

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
