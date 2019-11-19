import React from "react";
import {connect} from 'react-redux'
import TechCard from './TechCard'

const TechList = props => {
    console.log(props, "techlist")

    return (

        <div>
           
            {props.tech.map(item => (
                <TechCard key ={item.id} tech ={item} />
            ))}

        </div>

    )

}

const mapStateToProps = state => {
    return {
        tech: state.tech
    }
}


export default connect(mapStateToProps, {})(TechList);