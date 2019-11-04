import React, {Component} from 'react';

export default class Activity extends Component{
    render(){
        const details = this.props;
        // console.log(details);
        let activityStyle = {
            height:'200px',
            width:'300px',
            diplay:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItemss:'center',
            float:'left',
            margin:'5px'
        }
        console.log(details)
        return(
            <div style={activityStyle}>
                <img src={details.image} height="150" width="300"/>
                <span>{details.title}</span>
                <span>{details.price}</span>
            </div>
        )
    }
}