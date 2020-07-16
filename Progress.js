import React, {Component} from 'react';
import ProgressBar from './ProgressBar';
import '../App.css';

class Progress extends Component {
    
  render(){
    return (
        <div className = "dailyFact">
            <div className = "dailyProgress">
                <div className = "Eaten">
                    <p>2000</p>
                    <p>Eaten</p>
                </div>
                <ProgressBar/>
                <div className = "Burned">
                    <p>2000</p>
                    <p>Burned</p>
                </div>
            </div>
            <div className = "nutritionFact">
                <div>
                    <p> 20g </p>
                    <p>Carbs</p>
                </div>
            
                <div>
                    <p> 20g </p>
                    <p>Protein</p>
                </div>

                <div>
                    <p> 20g </p>
                    <p>Fat</p>
                </div>
                
                
                
            </div>
           
        </div> 
    );
  }
  
}

export default Progress;