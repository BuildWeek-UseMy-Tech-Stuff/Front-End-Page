import React from "react";
import {connect} from 'react-redux'
import TechCard from './TechCard'
import GridList from '@material-ui/core/GridList';

const TechList = props => {
    console.log(props, "techlist")

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
        tech: state.tech
    }
}


export default connect(mapStateToProps, {})(TechList);