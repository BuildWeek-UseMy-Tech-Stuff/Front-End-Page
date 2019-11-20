import React, { useEffect } from "react";
import { connect } from 'react-redux'

import { fetchTechListing } from '../actions'
import TechCard from './TechCard'
import Account from './Account'
import GridList from '@material-ui/core/GridList';

const TechList = (props) => {

    useEffect(() => {
        props.fetchTechListing()
    }, []);

    if (props.isFetching) {
        return <h2>Loading Data</h2>
    }

    return (

        <div>
           <GridList style={{justifyContent: "center"}}>
            {props.tech.map(item => (
                <TechCard key={item.id} tech ={item} />              
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