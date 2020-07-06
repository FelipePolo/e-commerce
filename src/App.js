import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom' 

import {Container} from 'reactstrap'
import Navbar from './components/navbar/Navbar'
import Home  from './components/home/Home'
import Detail from './components/details/Details'
import Car from './components/car/Car'
import Login from './components/login/login'
import Register from './components/register/Register'
import Admin from './components/admin/Admin'
import Footer from './components/footer/Fotter.jsx'

function App() {
  return (
    <div>
      <Router>
        <Container fluid={true} className="pt-5">
          <div className = "first">
            <Navbar />
          </div>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/Car">
              <Car></Car>
            </Route>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <Route path = "/register">
              <Register></Register>
            </Route>
            <Route path = "/admin">
              <Admin></Admin>
            </Route>
            <Route path="/:id">
              <Detail></Detail>
            </Route>
          </Switch>
          <Footer></Footer>
        </Container>
      </Router>
    </div>
  );
}

export default App;
