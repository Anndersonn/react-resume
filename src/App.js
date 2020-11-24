import './App.css';
import React from 'react'
import Header from './component/header';
import Footer from './component/footer';
import { CssBaseline } from '@material-ui/core';
import Home from './pages/home';
import Resume from './pages/resume';
import { Route } from 'react-router-dom'
import Contacts from './pages/contacts';
import About from './pages/about';



function App() {

  return (
    <div>
      <CssBaseline />
      <Header />
      <Footer />
      <Route exact path='/' component={Home} />
      <Route path='/resume' component={Resume} />
      <Route path='/contacts' component={Contacts} />
      <Route path='/about' component={About} />
  </div>
);
}

export default App;
