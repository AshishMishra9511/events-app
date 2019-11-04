import React,{Component} from 'react';
import {EVENT_SEARCH_API_BASE_URL,ACTIVITY_DETAILS_BASE_URL} from '../constants';
import SearchBar from './SearchBar'
import SerachResultsContainer from './SearchResultsContainer';

export default class EventMainContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            showModal : false,
            searchResults : undefined,
            fetch_error : false  
        }
    }

    searchForEvents = (location, startDate, endDate) =>{
        console.log(`Fetaching data for ${location},${startDate},${endDate}`)
        fetch(`${EVENT_SEARCH_API_BASE_URL}location=${location}&startDate=${startDate}&endDate=${endDate}`)
        .then(results=>results.json())
        .then(data=>{
            console.log(data);
            this.setState({searchResults:data})
        }).catch(err=>{
            console.log(`Failed to fetch results. Reason:${err}`)
            this.setState({fetch_error:true})
        })
    }


    render(){
        // this.searchForEvents('Seattle','2019-03-18','2019-03-30');
        return(
            <div>
                <SearchBar search={this.searchForEvents}/>
                <SerachResultsContainer results={this.state.searchResults}/>
            </div>

        )
    }
}