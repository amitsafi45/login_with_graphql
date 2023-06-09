import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import client from './apolloClient'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
<BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
</BrowserRouter>
  </ApolloProvider>
)
