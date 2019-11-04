import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default class SearcBar extends Component{
    constructor(props){
        super(props);
        this.state={
            location : 'Seattle',
            startDate: '2019-03-18',
            endDate:'2019-03-30'
        }
    }

    onLocationChangeHandler = (event) =>{
        this.setState({location:event.target.value})
    }
    
    onStartDateChangeHandler = (event) =>{
        this.setState({startDate:event.target.value})
    }    
    
    onEndDateChangeHandler = (event) =>{
        this.setState({endDate:event.target.value})
    }
    
    onButtonClickedHandler = () =>{
        this.props.search(this.state.location,this.state.startDate,this.state.endDate);
        // console.log("button clicker")
    }

    render(){
        return(
            <div>
                <TextField
                    id="Location"
                    label="Location"
                    margin="normal"
                    placeholder="Eg. Seattle"
                    onChange={this.onLocationChangeHandler}
                />
                <TextField
                    id="startDate"
                    label="Strat Date"
                    margin="normal"
                    placeholder="2019-012-01"
                    onChange={this.onStartDateChangeHandler}
                />
                <TextField
                    id="endDate"
                    label="End date"
                    margin="normal"
                    placeholder="2019-012-01"
                    onChange={this.onEndDateChangeHandler}
                />
                <Button variant="contained" onClick={this.onButtonClickedHandler}>Search</Button>
            </div>
        )
    }
}