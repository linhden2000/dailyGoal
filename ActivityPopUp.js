import React, {Component} from 'react';
import activity from '../img/activity.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import '../App.css';

class ActivityPopUp extends Component {
  constructor(props){
      super(props)
  }
render(){
  
  return (
      <div className = "ActivityPopUp" {...this.props} >
        <div className = "activityHeader">
          <p style = {{color: 'black'}}>Activity</p>
          <img style = {{width: '30%', height: '30%', borderRadius: '50%', marginLeft: '-10%', marginTop: '2%'}} src = {activity}/>
          <FontAwesomeIcon className = "closeButton" onClick={this.props.onHide} icon = {faTimes}/>
        </div>
          
        <div className = "activityBody">
          <input placeholder = "Search for activity "/>
          <br/>
          <input placeholder = "Duration"/>
          <br/>
          <button type = "submit">Submit</button>
        </div>
          
      </div>
       
  );
}

}

export default ActivityPopUp;