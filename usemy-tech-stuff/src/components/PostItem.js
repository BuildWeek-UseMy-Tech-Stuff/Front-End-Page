import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { FormikTextField, FormikSelectField } from "formik-material-fields"
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const UserForm = ({ status }, props) => {
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
    }));
    const classes = useStyles();
    const [people, setPeople] = useState([]);
    useEffect(() => {
        status && setPeople(people => [...people, status]);
    }, [status]);
  
    return (
        <Container componenet="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Post Your Item
                </Typography>
                <Form className={classes.form} noValidate>
                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="itemname" autoComplete="item" placeholder="Item Name *" />
                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="itemdescription" autoComplete="description" placeholder="Item's Description *" />
                    <FormikSelectField
                        name="category"
                        label="Category"
                        margin="normal"
                        options={[
                            { label: 'Computers', value: 0 },
                            { label: 'Mobile Phones', value: 1 },
                            { label: 'Cameras', value: 1 },
                            { label: 'Audio Equipment', value: 1 },
                        ]}
                        fullWidth
                        native
                    />
                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="price" autoComplete="price" placeholder="Daily Price $ *" />
                    
                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="ImageUrl" autoComplete="Image" placeholder="Add Image URL Here *" />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Add Your Item
                    </Button>


                </Form>
            </div>
        </Container>
    );
};
const FormikLoginForm = withFormik({
    mapPropsToValues({ itemname, itemdescription, price, ImageUrl }) {
        return {
            itemname: itemname || "",
            itemdescription: itemdescription || "",
            price: price || "",
            ImageUrl: ImageUrl || "",
        };
    },
    
    validationSchema: Yup.object().shape({
        itemname: Yup.string().min(2, 'Too short!').max(32, 'Too Long!').required(),
        itemdescription: Yup.string().min(24, 'Too short!').max(144, 'Too Long!').required(),
        price: Yup.number('Please Enter A Number').max(100, "Price must be less than $100 a day").typeError("Price must be a number").required().positive('Price Must be a Positive Number').integer(),
        ImageUrl: Yup.string().url().required(),
    }),

    handleSubmit(values, { setStatus, resetForm, props }) {
        //values is our object with all our data on it
        axiosWithAuth()
            .post("https://cors-anywhere.herokuapp.com/tech-stuff-api.herokuapp.com/api/login", values)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                setStatus(res.data);
                console.log(res.data);
                resetForm();
                props.history.push("/TechList")
            })
            .catch(err => console.log(err.response));
    }
})(UserForm);

export default FormikLoginForm;