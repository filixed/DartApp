import React from 'react'
import {Switch, Route} from 'react-router-dom'
import CountPoints from './Containers/CountPoints/CountPoints'
import Login from './Containers/Auth/Login/Login'

import Layout from './Components/Layout/Layout'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={"/"} component={CountPoints} />
        <Route path={"/login"} component={Login} />
      </Switch>
    </Layout>
  );
}

export default App;
