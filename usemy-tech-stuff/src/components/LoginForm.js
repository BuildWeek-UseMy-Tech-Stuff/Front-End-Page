import React from "react";
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import { FormikTextField } from "formik-material-fields"
import axios from "axios";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from "react-redux"
import { storeUserId } from "../actions/index"
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import { amber, green, lightBlue } from '@material-ui/core/colors';
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

const UserForm = ({ status, history }, props) => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
      };
  
      const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
          return;
          } else if(status === "success"){
            history.push("/TechList")
          }
  
          setOpen(false);
      };

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
            backgroundColor: lightBlue[200],
            '&:hover': {
                backgroundColor: lightBlue[300],
            }
        },
    }));
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <Form className={classes.form} noValidate>
                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="username" autoComplete="username" placeholder="Username *" />
                    <FormikTextField variant="outlined" margin="normal" fullWidth type="password" name="password" autoComplete="new-password" placeholder="Password *" />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        onClick={handleClick}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
          </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
              </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    {
                        (status === "waiting")
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
                            message="Logging in..."
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
                            message="Login failed"
                            /></Snackbar> : (status === "success") ? <Snackbar
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            open={open}
                            autoHideDuration={1000}
                            onClose={handleClose}
                        >
                            <MySnackbarContentWrapper
                            onClose={handleClose}
                            variant="success"
                            message="Login successful"
                            /></Snackbar> : null
                        }
                </Form>
            </div>
        </Container>
    );
};

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password, storeUserId }) {
        return {
            username: username || "",
            password: password || "",
            storeUserId: storeUserId
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().min(4, 'Too short!').max(16, 'Too Long!').required(),
        password: Yup.string().min(8, 'Too short!').max(16, 'Too Long!').required(),
    }),
    handleSubmit(values, { setStatus, resetForm, props }) {
        //values is our object with all our data on it
        setStatus("waiting")
        axios
            .post("https://cors-anywhere.herokuapp.com/tech-stuff-api.herokuapp.com/api/login", values)
            .then(res => {

                localStorage.setItem('token', res.data.token);

                values.storeUserId(res.data.user_id);

                setStatus(res.data);

                resetForm();
                
                setStatus("success");
            })
            .catch(err => {console.log(err.response); setStatus("failed")});
    }
})(UserForm);

const mapStateToProps = state => {
    return {
        userId: state.userId
    }
}

export default connect(mapStateToProps, { storeUserId })(FormikLoginForm);