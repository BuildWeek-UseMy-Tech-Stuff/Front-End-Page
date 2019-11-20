import React, { useState, useEffect } from "react";
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import { FormikTextField, FormikSelectField } from "formik-material-fields"
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect} from "react-redux"

const PostItem = ({ status }, props) => {
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
                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="user_id" autoComplete="user" placeholder="User ID *" />
                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="item_name" autoComplete="item" placeholder="Item Name *" />
                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="item_description" autoComplete="description" placeholder="Item's Description *" />
                    <FormikSelectField
                        name="category"
                        label="Category"
                        margin="normal"
                        options={[
                            { label: 'Computers', value: 0 },
                            { label: 'Mobile Phones', value: 1 },
                            { label: 'Cameras', value: 2 },
                            { label: 'Audio Equipment', value: 3 },
                        ]}
                        fullWidth
                        native
                    />
                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="rate" autoComplete="rate" placeholder="Daily Rate $ *" />

                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="image_url" autoComplete="Image" placeholder="Add Image URL Here *" />
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


const mapStateToProps = state => {
    
    return {
        user_id: state.user_id 
        
    }
}


const FormikPostItem = withFormik({
    mapPropsToValues({ user_id, item_name, item_description, rate, image_url }) {
        return {
            user_id: user_id || "",
            item_name: item_name || "",
            item_description: item_description || "",
            rate: rate || "",
            image_url: image_url || "",
        };
    },

    validationSchema: Yup.object().shape({
        item_name: Yup.string().min(2, 'Too short!').max(32, 'Too Long!').required(),
        item_description: Yup.string().min(6, 'Too short!').max(144, 'Too Long!').required(),

    }),

    handleSubmit(values, { setStatus, resetForm, props, user_id }) {
        //values is our object with all our data on it
    
        axiosWithAuth()
            .post("https://cors-anywhere.herokuapp.com/https://tech-stuff-api.herokuapp.com/api/rentals/create", values, user_id)
            .then(res => {
                
                setStatus(res.data);
                // console.log(res.data);       
                // console.log(values, 'values')
                resetForm();
                props.history.push("/TechList")
            })
            .catch(err => console.log(err.response));
    }
})(PostItem);

export default connect(mapStateToProps, {})(FormikPostItem);
