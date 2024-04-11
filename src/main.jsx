import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { TodoStore } from './store/TodoStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ChakraProvider>
    <Provider store={TodoStore}>
      <App />
    </Provider>
    </ChakraProvider>
  // </React.StrictMode>,
)
