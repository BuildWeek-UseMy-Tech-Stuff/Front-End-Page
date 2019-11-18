import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function Navbar() {
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
          backgroundColor: theme.palette.secondary.main,
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
            justifyContent: 'center'
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
          <>
            <NavLink className={classes.submit} to="/signup">
              <Button>
                  Sign Up
              </Button>
            </NavLink>
            <NavLink className={classes.submit} to="/login">
              <Button>
                  Login
              </Button>
            </NavLink>
          </>
        
      </div>
    </nav>
  );
        }