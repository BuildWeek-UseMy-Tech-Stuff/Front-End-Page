import React, { useEffect } from 'react';
import { withFormik, Form } from 'formik';
import { Link } from "react-router-dom"
import * as Yup from 'yup';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from "axios";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { FormikTextField } from 'formik-material-fields';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
let submitting = false;
const Flexbox = styled.div`
    display: flex;
    justify-content: center;
`
const LoginForm = (props) => {
    console.log("Props", props)
    useEffect(() => {
        submitting = false;
    },[submitting])
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
                <Form className={classes.form} noValidate>
                        <FormikTextField variant="outlined" margin="normal" fullWidth name="email" label="Email *" margin="normal" fullWidth/>
                        <FormikTextField variant="outlined" margin="normal" fullWidth name="username" label="Username *" margin="normal" fullWidth/>
                        <FormikTextField variant="outlined" margin="normal" fullWidth name="password" label="Password *" margin="normal" fullWidth/>
                    <Flexbox>
                    {
                    (submitting === true)
                        ? <CircularProgress color="primary"></CircularProgress>
                        : null
                    }
                    </Flexbox>
                    <div>
                        <Button type="submit" variant="contained" fullWidth color="primary" className={classes.submit}>Submit!</Button>
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
            // email: email || "",
            password: password || "",
        
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
        .max(16, "Username cannot be more than 16 characters")
        .required("A username is required"),
        // email: Yup.string()
        // .email("Please use a valid email address")
        // .required("An email is required"),
        password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("A password is required"),
        }),
    handleSubmit(values, { resetForm, setSubmitting, props }) {
        submitting = true;
        console.log("values" ,values)
        axios
            .post("https://cors-anywhere.herokuapp.com/https://tech-stuff-api.herokuapp.com/api/register", values)
            .then(res => {
                console.log(res);
                resetForm();
                setSubmitting(false);
                submitting = false;
                props.history.push("/login")
                
            })
            .catch(err => {
                console.log(err); // There was an error creating the data and logs to console
                setSubmitting(false);
            });
    }
})(LoginForm)
export default FormikLoginForm;