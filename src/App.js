import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import SecurityProvider from './SecurityProvider'

import Offers from './Offers'
import Transactions from './Transactions'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<SecurityProvider>
<Switch>
<Route exact path="/">
<Home />
</Route>
<Route exact path="/transactions">
<Transactions />
</Route>
<Route exact path="/offers">
<Offers />
</Route>
</Switch>
</SecurityProvider>
</BrowserRouter>
    </div>
  )
}

export default App
