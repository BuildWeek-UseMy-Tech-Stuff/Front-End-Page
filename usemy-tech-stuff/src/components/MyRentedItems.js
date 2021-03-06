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
import Modal from "@material-ui/core/Modal"
import EditPost from './EditPost'
import EditPost2 from "./EditPost2"
import '../App.css'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    textAlign: "center",
  },
  media: {
    height: 140,
  },
  modalBox: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const MyRentedItems = (props) => {
    console.log(props, "My Rented Items")
    
    const classes = useStyles();

    const [date, setDate] = useState({
        startDate: Date.now(),
        endDate: Date.now()
    })
    
    

   
    // const [openAccount, setOpenAccount] = React.useState(false);
    // const [postTool, setPostTool] = React.useState(false);
  
  

    return (

            


        <GridListTile style={{marginBottom: "5%"}} key={props.key} >
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Grid style={{height: "96%"}} item xs>
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
                        {props.tech.item_name}
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
                        <Typography variant="body" color="textSecondary" component="p">
                        {props.tech.item_description}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <div style={{display: 'flex', flexFlow: "row wrap", justifyContent: "center", marginBottom: "7px"}}>
                        
                        <Button style={{margin: "5%"}} size="small" color="primary">
                        return
                        </Button>
                        
                        
                    </div>
                </Card>
            </Grid>
        </MuiPickersUtilsProvider>
    </GridListTile>
    )
}


export default MyRentedItems

