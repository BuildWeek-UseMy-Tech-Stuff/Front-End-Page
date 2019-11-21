import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth"

// MaterialUI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItems: 'center'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '35%'
    },
    dense: {
      marginTop: theme.spacing(2),
    },
   
    button: {
        margin: theme.spacing(1),
        marginTop: '2%',
        marginBottom: '4.3%',
        width: '15%'
    },
    input: {
    display: 'none',
    },
    DropdownBoxContainer: {
        marginTop: '1%',
        display: 'flex',
        flexDirection: 'row',
        width: '35%',
        justifyContent: "space-around"
    },
    DropdownBox: {
     width: '200px',
        
    }
  }));



const EditPost2 = props => {
    console.log(props.tech, "edit")
    const classes = useStyles();
    const [ready, setReady] = useState("")
    const [item, setItem] = useState({
        item_name: "",
        item_description: "",
        category: "",
        rate: 0,
        img_url: "",
       
     
    });
    useEffect(() => {
        setItem(props.tech)
    }, [props.tech]);

    if(ready === "ready") {
        props.history.push("/TechList")
    }

const submitHandler = event => {
    event.preventDefault();
    axiosWithAuth()
        .put(`https://cors-anywhere.herokuapp.com/https://tech-stuff-api.herokuapp.com//api/rentals/${props.tech.id}`, item)  
        .then(res => {console.log(res); setReady("ready");})
        .catch(err => console.log(err.response))
        
    
    console.log(item, "Edit Form submit handler")
}



const changeHandler = event => {
    setItem({ ...item, [event.target.name]: event.target.value })
}


return (
       
    <div>
        
        <h1>Edit your tool</h1>
        <form className ={classes.container} onSubmit ={submitHandler}>
            
        <TextField
                
                label = "Item"
                variant ="outlined"
                margin="normal"
                className={classes.textField}
                type = "text"
                name="item_name"
                value={item.item_name}
                onChange={changeHandler}
                
                />
          
            <TextField
                
                label = "Description"
                variant ="outlined"
                margin="normal"
                className={classes.textField}
                type = "text"
                name="item_description"
                value={item.item_description}
                onChange={changeHandler}
                />
           
           <TextField
                
                label = "Category"
                variant ="outlined"
                margin="normal"
                className={classes.textField}
                type = "text"
                name="category"
                value={item.category}
                onChange={changeHandler}
                />
           
         
             <TextField
                
                label = "$ Cost Per Day "
                variant ="outlined"
                margin="normal"
                className={classes.textField}
                type = "text"
                name="rate"
                value={item.rate}
                onChange={changeHandler}
                
                />
           
           <TextField 
                
               
                label = "Img Url "
                variant ="outlined"
                margin="normal"
                className={classes.textField}
                type = "text"
                name="img_url"
                value={item.img_url}
                onChange={changeHandler}
                
                />
         
            
            <Button className={classes.button} variant="outlined" color="black"type ="submit">Upload Your Item</Button>
        </form>
    </div>

)

}
  





export default EditPost2;