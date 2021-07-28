import react from 'react'
import {Switch, Route} from 'react-router-dom'
import CountPoints from './Containers/CountPoints/CountPoints'

import Layout from './Components/Layout/Layout'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} component={CountPoints} />
      </Switch>
    </Layout>
  );
}

export default App;
