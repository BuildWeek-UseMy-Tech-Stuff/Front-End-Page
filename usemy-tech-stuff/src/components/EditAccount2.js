import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { connect} from "react-redux"


// MaterialUi
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
       
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '80%'
    },
    dense: {
      marginTop: theme.spacing(2),
    },
   
    button: {
    margin: theme.spacing(1),
    marginTop: '2%',
    marginBottom: '6%',
    width: '15%'
    },
    input: {
    display: 'none',
    },
    
  }));

const EditAccount2 = props => {
    console.log(props, "account")
    const classes = useStyles();
    
    const [userInfo, setUserInfo] = useState({
        username: "",
        email: "",
        phone_number: "",
        location: "",
       
    });
    useEffect(() => {
        setUserInfo(props.users)
    }, [props.users]);
    const submitHandler = event => {
        event.preventDefault();
        axiosWithAuth()
            .put(`https://cors-anywhere.herokuapp.com/https://tech-stuff-api.herokuapp.com/api/users/${props.userId}`, userInfo)  
            .then(res => console.log(res))
            .catch(err => console.log(err.response))
        
        console.log(userInfo, "Edit Form submit handler")
    }
    const changeHandler = event => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <form className ={classes.container} onSubmit= {submitHandler}>
            <TextField 
                label ="username"
                variant ="outlined"
                margin="normal"
                type="text"
                name="username"
                className={classes.textField}
                value={userInfo.username}
                onChange={changeHandler}
                placeholder="username"
                />

            <TextField 
                label ="email"
                variant ="outlined"
                margin="normal"
                type="text"
                name="email"
                className={classes.textField}
                value={userInfo.email}
                onChange={changeHandler}
                placeholder="email"
                />
            
            
             <TextField 
                label ="phone_number"
                variant ="outlined"
                margin="normal"
                type="text"
                name="phone_number"
                className={classes.textField}
                value={userInfo.phone_number}
                onChange={changeHandler}
                placeholder="phone_number"
                />
            <TextField 
                label ="location"
                variant ="outlined"
                margin="normal"
                type="text"
                name="location"
                className={classes.textField}
                value={userInfo.location}
                onChange={changeHandler}
                placeholder="location"
                />
            <Button className={classes.button} variant="outlined" color="black"type ="submit">submit</Button>
            </form>
        </div>
    )
}




const mapStateToProps = state => {
    
    return {
        userId: state.userId 
        
    }
}

export default connect(mapStateToProps, {})(EditAccount2)