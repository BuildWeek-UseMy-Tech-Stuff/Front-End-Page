import React from 'react';


import { Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import LoginForm from "./components/LoginForm"
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
function App() {
  return (
    <div className="App">
    <Route path="/" component={Navigation} />
    <Route path="/login" component={LoginForm} />
    {/* <Route path="/signup" component={SignupForm} /> */}
    <Copyright/>

    </div>
  );
}

export default App;
