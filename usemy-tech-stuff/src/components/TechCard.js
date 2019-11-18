import React, {useState} from 'react'

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';





// MaterialUI







const TechCard = props => {
    console.log(props.tech, "TechCard")
    console.log(props.tech.name, "tech")
    console.log(props.tech.id)
    
    const [date, setDate] = useState({
        startDate: "",
        endDate:""
    })
    
    const changeHandler = event => {
        setDate({...date, [event.target.name]: event.target.value})
    }
    
    return (
    
    <div>
        {props.tech.name}
        {props.tech.description}
        {props.tech.categroy}
        {props.tech.dailyPrice}
        <img className ="tech-img" src ={props.tech.imgUrl}/>
        <form>
        <input 
            type = "date"
            name="startDate"
            value={date.startDate}
            onChange ={changeHandler}
            placeholder="Enter start date"
            required
        />
        <input 
            type = "date"
            name="endDate"
            value={date.endDate}
            onChange ={changeHandler}
            placeholder="Enter end date"
        />
        </form>
        <button>rent this item</button>
    </div>

    )

}





export default TechCard;