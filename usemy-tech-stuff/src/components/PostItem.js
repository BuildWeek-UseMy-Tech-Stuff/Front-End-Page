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
    console.log(props, "post")
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
console.log("Props", props)
    return (
        <Container componenet="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Post Your Item
                </Typography>
                <Form className={classes.form} noValidate>
                    {/* <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="user_id" autoComplete="user" placeholder="User ID *" /> */}
                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="item_name" autoComplete="item" placeholder="Item Name *" />
                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="item_description" autoComplete="description" placeholder="Item's Description *" />
                    {/* <FormikSelectField
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
                    /> */}
                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="rate" autoComplete="rate" placeholder="Daily Rate $ *" />

                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="img_url" autoComplete="Image" placeholder="Add Image URL Here *" />
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





const FormikPostItem = withFormik({
    mapPropsToValues({ item_name, item_description, rate, img_url, userId }) {
        return {
         
            item_name: item_name || "",
            item_description: item_description || "",
            rate: rate || "",
            img_url: img_url || "",
            user_id: userId  || ""
        };
    },

    validationSchema: Yup.object().shape({
        item_name: Yup.string().min(2, 'Too short!').max(32, 'Too Long!').required(),
        item_description: Yup.string().min(6, 'Too short!').max(144, 'Too Long!').required(),

    }),

    handleSubmit(values, { setStatus, resetForm, props }) {
        //values is our object with all our data on it
        console.log("props in post request", values)
    
        axiosWithAuth()
            .post("https://cors-anywhere.herokuapp.com/https://tech-stuff-api.herokuapp.com/api/rentals/create", values )
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


const mapStateToProps = state => {
    
    return {
        userId: state.userId 
        
    }
}

export default connect(mapStateToProps, {})(FormikPostItem);
