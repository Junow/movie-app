import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Main, Header} from './components'
import Detail from './components/Detail'
import {GlobalStyle} from './global/style'

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/detail/:id' component={Detail}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
