import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
export default function Navbar(props) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };
  const token = localStorage.getItem("token");
  const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: lightBlue[200]
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    paper2: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    
    },
    setWidth: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
     [theme.breakpoints.down('sm')]: {
       flexDirection: "column"
     }
    },
    NavbarColor: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: lightBlue[200],
    
    },
    noDecor: {
      textDecoration: 'none'
    },
  }));
  const classes = useStyles();
  return (
    <nav>
      
      <div className={classes.paper}>
        <Avatar className={classes.avatar}
          src="https://image.flaticon.com/icons/svg/11/11296.svg"
          alt="cartoon image of two friends"
        />
        <h1>Use My Tech</h1>

      </div>
      <div className={classes.paper2}>
        {token === null ? (   
          <>
            <AppBar className={classes.NavbarColor} position="static">
              <Toolbar className={classes.setWidth}>
                <NavLink className={`${classes.submit} ${classes.noDecor}`} to="/signup">
                  <Button>
                    Sign Up
              </Button>
                </NavLink>
                <NavLink className={`${classes.submit} ${classes.noDecor}`} to="/login">
                  <Button>
                    Login
              </Button>
                </NavLink>
              </Toolbar>
            </AppBar>
          </>
        ) : (
            <>
              <AppBar className={classes.NavbarColor} position="static">
                <Toolbar className={classes.setWidth}>
                  <NavLink className={`${classes.noDecor}`} to={`/TechList`}>
                    <Button>
                      Items For Rent
              </Button>
                  </NavLink>
                  <NavLink className={`${classes.noDecor}`} to={`/AddItem`}>
                    <Button>
                      Rent Out Your Item
              </Button>
                  </NavLink>
                  <NavLink className={`${classes.noDecor}`} to={`/Account`}>
                    <Button>
                      Account
              </Button>
                  </NavLink>
                  <Button className="navlink button" onClick={handleLogout}>
                    Logout
            </Button>
                </Toolbar>
              </AppBar>
            </>

          )}

      </div>
    </nav>
  );
}