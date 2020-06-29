import React from 'react';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom' 

import {Container} from 'reactstrap'
import Navbar from './components/navbar/Navbar'
import Area  from './components/area/area'
function App() {
  return (
    <div>
      <Router>
        <Container fluid ={true} className = "pt-5">
          <Navbar/>


          <Switch>
            <Route exact path = "/">
              <Area></Area>
            </Route>
            <Route path = "/:id">
              <h1>hola mundo!!</h1>
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
