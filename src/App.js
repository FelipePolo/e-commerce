import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom' 

import {Container} from 'reactstrap'
import Navbar from './components/navbar/Navbar'
import Home  from './components/home/Home'
import Detail from './components/details/Details'
function App() {
  return (
    <div>
      <Router>
        <Container fluid ={true} className = "pt-5">
          <Navbar/>


          <Switch>
            <Route exact path = "/">
              <Home></Home>
            </Route>
            <Route path = "/:id">
              <Detail></Detail>
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
