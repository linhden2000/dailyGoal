import React, {Component} from 'react';
import {Modal, Button, Row, Col} from 'react-bootstrap';
import Nutrition from './Nutrition'
import Activities from './Activities'
import NutritionPopUp from './NutritionPopUp'
import ActivityPopUp from './ActivityPopUp'
import '../App.css';

class Calories extends Component {
  constructor(props){
    super(props);
    this.state = {nutrition:[
      {
        id: 1,
        food: 'apple',
        calories: '182kcal'
      },
      {
        id: 2,
        food: 'chicken',
        calories: '200kcal'
      },
      {
        id: 3,
        food: 'broccoli',
        calories: '70kcal'
      }
    ], addNutritionShow: false,
                  activity: [], addActivityShow: false}
  }

  render(){
    const {nutrition, addNutritionShow} = this.state
    
    let addNutritionClose = () => {
      this.setState({addNutritionShow: false})
      
    }
    let addNutritionOpen = () => {
      this.setState({addNutritionShow:true})
      
    }


    const {activity, addActivityShow} = this.state
    let addActivityClose = () => this.setState({addActivityShow: false})
   
    return (
        <div className = "calories" 
        >
          <div className = "nutrition">
            { this.state.addNutritionShow == false ?
              <div>
                <Nutrition/>
                <div className = "nutritionContent">
                  <div className = "nutritionItem">  
                    <p> 182g</p>
                    <p>Apple</p>
                    <p>50kcal</p>
                  </div>
                  <div className = "nutritionItem">
                    <p> 182g</p>
                    <p>Apple</p>
                    <p>50kcal</p>
                  </div>
                  <div className = "nutritionItem">
                    <p> 182g</p>
                    <p>Apple</p>
                    <p>50kcal</p>
                  </div>
                  <div className = "nutritionItem">
                    <p> 182g</p>
                    <p>Apple</p>
                    <p>50kcal</p>
                  </div>
                  <div className = "nutritionItem">
                    <p> 182g</p>
                    <p>Apple</p>
                    <p>50kcal</p>
                  </div>
                  <div className = "nutritionItem">
                    <p> 182g</p>
                    <p>Apple</p>
                    <p>50kcal</p>
                  </div>
                  <div className = "nutritionItem">
                    <p> 182g</p>
                    <p>Apple</p>
                    <p>50kcal</p>
                  </div>
                  <div className = "nutritionItem">
                    <p> 182g</p>
                    <p>Apple</p>
                    <p>50kcal</p>
                  </div>
                  <div className = "nutritionItem">
                    <p> 182g</p>
                    <p>Apple</p>
                    <p>50kcal</p>
                  </div>
                </div>
                <button onClick = {addNutritionOpen}>Add</button>
                </div>
                :
                null
            }
            
          </div>
          {
              this.state.addNutritionShow 
              ?  <NutritionPopUp nutrition = {nutrition}
              onHide = {addNutritionClose}/>
              
              : null
          }
          
            
          <div  className = "activities">
            { this.state.addActivityShow == false ?
              <div>
                <Activities/>
            <div className = "activityContent">
              <div className = "activityItem">
                <p>100</p>
                <p>Squat</p>
                <p>50kcal</p> 
              </div>
              <div className = "activityItem">
                <p>100</p>
                <p>Squat</p>
                <p>50kcal</p>
              </div>
              <div className = "activityItem">
                <p>100</p>
                <p>Squat</p>
                <p>50kcal</p>
              </div>
              <div className = "activityItem">
                <p>100</p>
                <p>Squat</p>
                <p>50kcal</p>
              </div>
              <div className = "activityItem">
                <p>100</p>
                <p>Squat</p>
                <p>50kcal</p>
              </div>
              <div className = "activityItem">
                <p>100</p>
                <p>Squat</p>
                <p>50kcal</p>
              </div>
              <div className = "activityItem">
                <p>100</p>
                <p>Squat</p>
                <p>50kcal</p>
              </div>
              <div className = "activityItem">
                <p>100</p>
                <p>Squat</p>
                <p>50kcal</p>
              </div>
              <div className = "activityItem">
                <p>100</p>
                <p>Squat</p>
                <p>50kcal</p>
              </div>
              
            </div>
            <button onClick = {() => this.setState({addActivityShow: true})}>Add</button>
                </div>
              :
              null
            }
            
          </div>
          {
              this.state.addActivityShow 
              ? <ActivityPopUp
              onHide = {addActivityClose}/>
              : null
          }
      
            
          
      
            
        </div> 
    );
  }
  
}

export default Calories;