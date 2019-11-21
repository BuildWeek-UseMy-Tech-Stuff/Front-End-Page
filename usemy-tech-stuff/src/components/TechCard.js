import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { KeyboardDatePicker } from '@material-ui/pickers';
import '../App.css'
import { connect } from 'react-redux'
import {fetchAddRentedItem} from '../actions'
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    textAlign: "center",
  },
  media: {
    height: 140,
  },
});

const TechCard = props => {

    
    // console.log(props.tech.id)
    
    const classes = useStyles();

    const [date, setDate] = useState({
        rented_at: "",
        due_back: "",
    })
    
    const changeHandler = event => {
        setDate({...date, [event.target.name]: event.target.value})
    }

    return (

      
        <GridListTile style={{marginBottom: "5%"}} key={props.key} >
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Grid style={{height: "96.5%"}} item xs>
                    <Card className={classes.card} style={{
                        margin: "5%",
                        height: "100%"
                    }}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.tech.img_url}
                        title={props.tech.category}
                    />
                    <CardContent>
                        <Typography variant="h4" component="h4">
                        {props.tech.item_name}
                        </Typography>
                        <Typography variant="h5" component="h5">
                        <br/>
                        Category:<br/>
                        </Typography>
                        <Typography variant="h5" component="h5">
                        {props.tech.category}
                        </Typography>
                        <Typography variant="h5" component="h5">
                        <br/>
                        Rate: ${props.tech.rate} per day
                        </Typography>
                        <Typography variant="h5" component="h5">
                        <br/>
                        Item description:
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                        {props.tech.item_description}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <div style={{display: 'flex', flexFlow: "row wrap", justifyContent: "center", marginBottom: "7px"}}>
                        {/* <KeyboardDatePicker
                        disableToolbar
                        name = "rented_at"
                        variant="inline"
                        format="MM/DD/YYYY"
                        margin="normal"
                        id="date-picker-inline"
                        label="Enter start date"
                        value={date.rented_at}
                        onChange={changeHandler}
                        // KeyboardButtonProps={{
                        //     'aria-label': 'change date',
                        // }}
                        />
                        <KeyboardDatePicker
                        disableToolbar
                        name = "due_back"
                        variant="inline"
                        format="MM/DD/YYYY"
                        margin="normal"
                        id="date-picker-inline"
                        label="Enter end date"
                        value={date.due_back}
                        onChange={changeHandler}
                        // KeyboardButtonProps={{
                        //     'aria-label': 'change date',
                        // }}
                        /> */}
                        <input 
                            type = "date"
                            name="rented_at"
                            value={date.rented_at}
                            onChange ={changeHandler}
                            placeholder="Enter start date"
                            required
                        />
                        <input 
                            type = "date"
                            name="due_back"
                            value={date.due_back}
                            onChange ={changeHandler}
                            placeholder="Enter start date"
                            required
                        />



                        <Button onClick={() => props.fetchAddRentedItem(props.userId, date.rented_at, date.due_back)} style={{margin: "5%"}} size="small" color="primary">
                        Rent this item
                        </Button>
                    </div>
                </Card>
            </Grid>
        </MuiPickersUtilsProvider>
    </GridListTile>
    )
}
const mapStateToProps = state => {
    return {
        userId:state.userId,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(mapStateToProps,{fetchAddRentedItem})(TechCard)