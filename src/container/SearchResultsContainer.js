import React, {Component} from 'react';
import Activity from '../components/Activity';

 export default class SearchResultsContainer extends Component{
     constructor(props){
         super(props);
     }

     render(){
         var results = this.props.results;
         let containerStyle = {
            display:'flex',
            flexDirection:'row',
        }
         return(
            results?
            <div>
                {results.activities.map((activity,index)=>{
                    return(<Activity id={activity.id} title={activity.title} image={activity.imageUrl} price={activity.fromPrice}/>)
                })}
            </div>
            :
            <div>enter Details to get details</div>             
         )
     }
 }