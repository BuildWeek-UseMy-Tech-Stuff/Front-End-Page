import React, { useEffect } from 'react';
import { withFormik, Form } from 'formik';
import { Link } from "react-router-dom"
import * as Yup from 'yup';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from "axios";
import {axiosWithAuth } from '../utils/axiosWithAuth'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { FormikTextField } from 'formik-material-fields';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import { amber, green } from '@material-ui/core/colors';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};
  
const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));
  
function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];
  
  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}
  
MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

function LoginForm({ status, setSubmitting, isSubmitting, isValid }) {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      if(isValid === true) {
        setOpen(true);
      }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    useEffect(() => {
        setSubmitting(false);
    },[isSubmitting])

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
        button: {
            margin: theme.spacing(1),
          },
          input: {
            display: 'none',
          },
    }));

    const classes = useStyles();
    
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                        Sign Up
                </Typography>
                <Form className={classes.form}>
                        <FormikTextField variant="outlined" margin="normal" fullWidth name="email" autoComplete="email" label="Email *" type="text"/>
                        <FormikTextField variant="outlined" margin="normal" fullWidth name="username" autoComplete="username" placeholder="Username *" type="text"/>
                        <FormikTextField variant="outlined" margin="normal" fullWidth name="password" label="Password *" type="password"/>
                    <div>
                        <Button onClick={handleClick} type="submit" variant="contained" fullWidth color="primary" className={classes.submit}>Submit!</Button>
                        {
                        (isSubmitting === true)
                            ? <Snackbar
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                        >
                            <MySnackbarContentWrapper
                            onClose={handleClose}
                            variant="info"
                            message="Account creation in progress"
                            /></Snackbar>
                            : (status === "failed") ? <Snackbar
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                        >
                            <MySnackbarContentWrapper
                            onClose={handleClose}
                            variant="error"
                            message="Account creation failed"
                            /></Snackbar> : <Snackbar
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                        >
                            <MySnackbarContentWrapper
                            onClose={handleClose}
                            variant="success"
                            message="Account successfully created"
                            /></Snackbar>
                        }
                    </div>
                </Form>
            </div>
        </Container>
    );
}
const FormikLoginForm = withFormik({
    mapPropsToValues({username, email, password}) {
        return {
            username: username || "",
            email: email || "",
            password: password || "",
        
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
        .max(16, "Username cannot be more than 16 characters")
        .required("A username is required"),
        email: Yup.string()
        .email("Please use a valid email address")
        .required("An email is required"),
        password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("A password is required"),
        }),

    handleSubmit(values, { resetForm, setSubmitting, setStatus, props }) {
        setSubmitting(true);

        axiosWithAuth()
            .post("https://cors-anywhere.herokuapp.com/https://tech-stuff-api.herokuapp.com/api/register", values)
            .then(res => {
                setStatus("success");
                resetForm();
                setSubmitting(false);
                props.history.push("/login")
                

            })
            .catch(err => {
                setStatus("failed")
                console.log(err); // There was an error creating the data and logs to console
                setSubmitting(false);
            });
    }
})(LoginForm)
export default FormikLoginForm;