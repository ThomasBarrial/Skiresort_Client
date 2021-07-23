import React from 'react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Questions from './components/Questions/Questions'
import Home from './pages/Home'
import queryClient from './Api/query-clients'
import OneResort from './components/OneResort'
import Settings from './components/Settings'
import Meteo from './components/Meteo'

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/questionnary" component={Questions} />
          <Route exact path="/resort/:id" component={OneResort} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/meteo" component={Meteo} />
        </Switch>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
