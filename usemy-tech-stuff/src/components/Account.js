import React, { useState} from "react"
import {Link} from "react-router-dom"
import  { useEffect } from "react";
import { connect } from 'react-redux'
import { storeUserRentals } from '../actions'
import { fetchDeleteTechPost } from "../actions"
import {axiosWithAuth } from '../utils/axiosWithAuth'
import { fetchTechListing } from '../actions'
import MyRentals from "./MyRentals"
import axios from "axios"
import GridList from '@material-ui/core/GridList';
import { Button } from "@material-ui/core";


function Account (props) {
    // console.log(props.userId, "account page")
    
    const [rentals, setRentals] = useState([]);
    
    useEffect(() => {
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
            console.log(res)
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
        <Link style={{margin: "0 Auto"}} to="/EditAccount"><Button>Edit Account</Button></Link>
        </div>
        <div>
            <h1 style={{display: "flex", justifyContent: "center"}}>My rentals</h1>
            <GridList style={{justifyContent: "center"}}>
            {rentals.map(item => (
                <MyRentals key={item.id} tech ={item} fetchDeleteTechPost ={props.fetchDeleteTechPost}/>              
            ))}
            </GridList>
        </div>
        </>



    )


}

const mapStateToProps = state => {

    return {
        userId: state.userId,
        postItems: state.postItems
    }

}
// export default Account
export default connect(mapStateToProps, {storeUserRentals, fetchDeleteTechPost}) (Account)