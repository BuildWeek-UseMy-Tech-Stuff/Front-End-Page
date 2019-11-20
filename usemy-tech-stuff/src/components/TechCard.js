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

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const TechCard = props => {
    console.log(props.tech, "TechCard")
    // console.log(props.tech.name, "tech")
    // console.log(props.tech.id)
    
    const classes = useStyles();

    const [date, setDate] = useState({
        startDate: Date.now(),
        endDate: Date.now()
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
                        <Typography variant="h5" component="h5">
                        {props.tech.name}
                        </Typography>
                        <Typography variant="h6" component="h6">
                        Category:<br/>
                        </Typography>
                        <Typography variant="h6" component="h6">
                        {props.tech.category}
                        </Typography>
                        <Typography variant="h6" component="h6">
                        <br/>
                        Item description:<br/>
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                        {props.tech.description}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <div style={{display: 'flex', flexFlow: "row wrap", justifyContent: "center", marginBottom: "7px"}}>
                        <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/DD/YYYY"
                        margin="normal"
                        id="date-picker-inline"
                        label="Enter start date"
                        value={date.startDate}
                        onChange={changeHandler}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                        <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/DD/YYYY"
                        margin="normal"
                        id="date-picker-inline"
                        label="Enter end date"
                        value={date.endDate}
                        onChange={changeHandler}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                        <Button style={{margin: "5%"}} size="small" color="primary">
                        Rent this item
                        </Button>
                    </div>
                </Card>
            </Grid>
        </MuiPickersUtilsProvider>
    </GridListTile>
    )
}

export default TechCard;