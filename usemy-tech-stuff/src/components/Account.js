import React from "react"
import {Link} from "react-router-dom"

import  { useEffect } from "react";
import { connect } from 'react-redux'

import { fetchTechListing } from '../actions'


function Account (props) {


    return (


        <div>
            
           <Link to ={'/AddItem'}><button>add item button</button></Link>

        </div>


    )


}



export default Account 