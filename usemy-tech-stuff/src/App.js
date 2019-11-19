import React from 'react';
import SignupForm from './components/SignupForm.js';

import PrivateRoute from './components/PrivateRoute'
import { Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import LoginForm from "./components/LoginForm"
import TechList from "./components/TechList"
import PostItem from "./components/PostItem"
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
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
    <PrivateRoute exact path ="/TechList" component = {TechList} />
    <PrivateRoute exact path="/AddItem" component = {PostItem} />
    <Copyright/>
   {/* <TechList/> */}
    </div>
  );
}

export default App;
