import React from 'react';
import SignupForm from './components/SignupForm.js';
import EditAccount from "./components/EditAccount";
import PrivateRoute from './components/PrivateRoute'
import { Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import LoginForm from "./components/LoginForm"
import TechList from "./components/TechList"
import Dogs from "./components/Dogs"
import Morties from "./components/Morty"
import PostItem from "./components/PostItem"
import EditPost from "./components/EditPost"
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Account from './components/Account'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{marginBottom: "2%"}}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/BuildWeek-UseMy-Tech-Stuff">
        Use My Tech
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function App(props) {
  return (
    <div className="App">
    <Route path="/" component={Navigation} />
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />
    <Route path="/dogs" component={Dogs} />
    <Route path="/morties" component={Morties} />
    <PrivateRoute exact path ="/TechList" component = {TechList} />
    <PrivateRoute exact path ="/EditAccount" component = {EditAccount} />
    <PrivateRoute exact path="/AddItem" component = {PostItem} />
    <PrivateRoute exact path="/EditPost/:postID" component = {EditPost} />
    <PrivateRoute exact path="/Account" component = {Account} />
  
    <Copyright/> 
    </div>
  );
}

export default App;
