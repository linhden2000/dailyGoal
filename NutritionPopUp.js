import React, {Component} from 'react';
import nutrition from '../img/nutrition.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import '../App.css';

class NutritionPopUp extends Component {
    constructor(props){
        super(props)
        this.state = {
          searchResult: ''
        }
        
    }
    foodSearch = (e) =>{
      this.setState({searchResult: e.target.value})
    }

  
    
  render(){
     
    return (
       
        <div className =  "NutritionPopUp" {...this.props} >
          <div className = "nutritionHeader">
            <p style = {{color: 'black'}}>Nutrition</p>
            <img style = {{width: '30%', height: '30%', borderRadius: '50%', marginLeft: '-10%', marginTop: '2%'}} src = {nutrition}/>
            <FontAwesomeIcon className = "closeButton" onClick={this.props.onHide} icon = {faTimes}/>
          </div>
            
          <div className = "nutritionBody">
            <input placeholder = "Search for food " onChange ={this.foodSearch} value = {this.state.searchResult}/>
            <br/>
            <input placeholder = "Amount"/>
            <br/>
            <button type = "submit">Submit</button>
          </div>
            
        </div>
         
    );
  }
  
}

export default NutritionPopUp;