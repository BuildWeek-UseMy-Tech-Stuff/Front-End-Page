import React from "react";
import {connect} from 'react-redux'


const TechList = props => {


    return (

        <div>


        </div>

    )

}

const mapStateToProps = state => {
    return {
        tech: state.tech
    }
}


export default connect(mapStateToProps, {})(TechList);