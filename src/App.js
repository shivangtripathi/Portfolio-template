import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Projects from './pages/Projects';
import Error from './pages/Error';
function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/projects' exact component={Projects} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/error' exact component={Error} />
      <Redirect to='/error' />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
