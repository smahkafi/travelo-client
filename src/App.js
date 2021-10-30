import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Menu from './Pages/Shared/Menu/Menu';
import SignIn from './Pages/SignIn/SignIn/SignIn';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/SignIn/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import MyBookings from './Pages/MyBookings/MyBookings';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menu></Menu>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/mybookings">
              <MyBookings></MyBookings>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;