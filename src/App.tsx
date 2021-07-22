import React from 'react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Questions from './components/Questions/Questions'
import Home from './pages/Home'
import queryClient from './Api/query-clients'
import OneResort from './components/OneResort'

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/questionnary" component={Questions} />
          <Route exact path="/resort/:id" component={OneResort} />
        </Switch>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
