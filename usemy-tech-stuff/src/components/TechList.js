import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'

import { fetchTechListing, fetchAddRentedItem } from '../actions'
import TechCard from './TechCard'
import GridList from '@material-ui/core/GridList';

const TechList = (props) => {
  console.log(props.tech, "item details")
    useEffect(() => {
        props.fetchTechListing()
    }, []);

    if (props.isFetching) {
        return <h2 style={{textAlign: "center"}}>Loading Data</h2>
    }

    return (

        <div>
           <GridList style={{justifyContent: "center"}}>
            {props.tech.map((item, index) => (
                <TechCard key={index} tech ={item}/>              
            ))}
            </GridList>

            
        </div>

    )
        
}

const mapStateToProps = state => {
    return {
        tech: state.tech,
        isFetching: state.isFetching,
        error: state.error,
    }
}


export default connect(mapStateToProps, {fetchTechListing})(TechList);