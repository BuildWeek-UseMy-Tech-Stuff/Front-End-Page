import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import axios from "axios";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { FormikTextField } from 'formik-material-fields';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 5%;
`
const Flexbox = styled.div`
    display: flex;
    margin: 5%;
    justify-content: center;
`
const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

let submitting = false;

function LoginForm({ values }) {
    const classes = useStyles();
    return (
        <Container>
            <Form>
                <Flexbox>
                <div>
                    <FormikTextField variant="outlined" margin="normal" fullWidth name="email" label="Email" margin="normal" fullWidth/>
                </div>
                </Flexbox>
                <Flexbox>
                <div>
                    <FormikTextField variant="outlined" margin="normal" fullWidth name="username" label="Username" margin="normal" fullWidth/>
                </div>
                </Flexbox>
                <Flexbox>
                <div>
                    <FormikTextField variant="outlined" margin="normal" fullWidth name="password" label="Password" margin="normal" fullWidth/>
                </div>
                </Flexbox>
                <Flexbox>
                    <FormControlLabel
                        control={
                            <Checkbox
                            defaultChecked
                            color="default"
                            value={values.tos}
                            inputProps={{
                            'aria-label': 'checkbox with default color',
                            }}
                        />
                        }
                        label="I accept the terms and conditions"
                    />
                </Flexbox>
                {
                (submitting === true)
                    ? console.log(submitting)
                    : <div>Data submitted</div>
                }
                <Flexbox>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>Submit!</Button>
                </Flexbox>
            </Form>
        </Container>
    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({username, email, password, tos}) {
        return {
            username: username || "",
            email: email || "",
            password: password || "",
            tos: tos || false
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
        tos: Yup.boolean()
        .oneOf([true], 'You Must Accept the Terms and Conditions'),
        }),
    handleSubmit(values, { resetForm, setSubmitting }) {
        submitting = true;
        axios
            .post("https://reqres.in/api/users", values)
            .then(res => {
                resetForm();
                setSubmitting(false);
                submitting = false;
            })
            .catch(err => {
                console.log(err); // There was an error creating the data and logs to console
                setSubmitting(false);
            });
    }
})(LoginForm)

export default FormikLoginForm;