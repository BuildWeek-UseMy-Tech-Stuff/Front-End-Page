import React, { useState} from "react"
import {Link} from "react-router-dom"
import  { useEffect } from "react";
import { connect } from 'react-redux'
import { storeUserRentals } from '../actions'
import { fetchDeleteTechPost } from "../actions"
import { fetchRentedItem } from "../actions"
import {axiosWithAuth } from '../utils/axiosWithAuth'
import { makeStyles } from '@material-ui/core/styles';
import { fetchTechListing } from '../actions'
import MyRentals from "./MyRentals"
import axios from "axios"
import GridList from '@material-ui/core/GridList';
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal"
import EditAccount2 from "./EditAccount2"


const useStyles = makeStyles(theme => ({

    modalBox: {
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }));

function Account (props) {
    // console.log(props, "account page")
    const [open, setOpen] = React.useState(false);

    
    const classes = useStyles();
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const [rentals, setRentals] = useState([]);
    
    useEffect(() => {
        //action
        props.fetchRentedItem(props.userId)
        console.log(props.rentItems, "rented Items")
        //action
        
        axiosWithAuth()
        .get(`https://cors-anywhere.herokuapp.com/https://tech-stuff-api.herokuapp.com/api/users/${props.userId}/rentals`)
        .then(res => {
        
           setRentals(res.data.rentals)
            props.storeUserRentals(res.data.rentals)
        })
        .catch(err => {
            console.log("There was an error, ", err)
        })

    },[])
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get(`https://cors-anywhere.herokuapp.com/https://tech-stuff-api.herokuapp.com/api/users/${props.userId}`)
        .then(res => {
            console.log(res, "userinformation")
           setUsers(res.data)
            
        })
        .catch(err => {
            console.log("There was an error, ", err)
        })
    },[])

    return (
        <>
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
         <h1 style={{display: "flex", justifyContent: "center"}}>User Profile</h1>
        <div style={{display: "flex", flexDirection: "column", margin: "0 auto", flexWrap: "wrap", justifyContent: "space-evenly"}}>
            <p>Email: {users.email}</p>
            <p>Username: {users.username}</p>
            <p>Location: {users.location}</p>
            <p>Phone Number: {users.phone_number}</p>
        </div>
        {/* <Link style={{margin: "0 Auto"}} to="/EditAccount"><Button>Edit Account</Button></Link> */}
        
                        <Button onClick ={handleOpen}>Edit Account</Button>
                        <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={open}
                            onClose={handleClose}
                            position="relative"
                            left="50%"
                        >   
                            <div className = {classes.modalBox}>
                            <EditAccount2  users ={users} email = {users.email} username= {users.username} location = {users.location} phone ={users.phone}
                            />
                            </div>
                        </Modal>
        </div>
        <div>
            <h1 style={{display: "flex", justifyContent: "center"}}>My rentals</h1>
            <GridList style={{justifyContent: "center"}}>
            {rentals.map(item => (
                <MyRentals key={item.id} tech ={item} fetchDeleteTechPost ={props.fetchDeleteTechPost} history ={props.history}/>              
            ))}
            </GridList>
            {/* {props.rentItems.map(item => (
                <MyRentals key= {item.id} tech ={item} history ={props.history} />
            ))} */}
        </div>
        </>



    )


}

const mapStateToProps = state => {

    return {
        userId: state.userId,
        postItems: state.postItems,
        rentItems: state.rentItems
    }

}
// export default Account
export default connect(mapStateToProps, {storeUserRentals, fetchDeleteTechPost, fetchRentedItem}) (Account)