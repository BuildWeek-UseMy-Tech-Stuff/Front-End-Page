import React, { useState} from "react"
import {Link} from "react-router-dom"
import  { useEffect } from "react";
import { connect } from 'react-redux'
import {axiosWithAuth } from '../utils/axiosWithAuth'
import { fetchTechListing } from '../actions'
import MyRentals from "./MyRentals"
import axios from "axios"
import GridList from '@material-ui/core/GridList';


function Account (props) {
    console.log(props.userId, "account page")
    
    const [rentals, setRentals] = useState([]);
    // console.log(props, "account page"),

    useEffect(() => {
        axiosWithAuth()
        .get(`https://cors-anywhere.herokuapp.com/https://tech-stuff-api.herokuapp.com/api/users/${props.userId}/rentals`)
        .then(res => {
            console.log(res)
           setRentals(res.data.rentals)
            
        })
        .catch(err => {
            console.log("There was an error, ", err)
        })
    },[])

    return (


        <div>
            <h1 style={{display: "flex", justifyContent: "center"}}>My rentals</h1>
            <GridList style={{justifyContent: "center"}}>
            {rentals.map(item => (
                <MyRentals key={item.id} tech ={item} />              
            ))}
            </GridList>
        </div>


    )


}

const mapStateToProps = state => {

    return {
        userId: state.userId
    }

}
// export default Account
export default connect(mapStateToProps, {}) (Account)