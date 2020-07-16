import React, {Component} from 'react';
import '../App.css';



class ProgressBar extends Component {
 thump = () =>{
     return {
         background: 'deeppink',
         width: '60%',
         height:'20px',
         borderRadius:'10px',
         borderRight: 'grey 0.5px solid'
         
     }
 }

  render(){
    return (
        <div className = "track">
            <div style = {this.thump()}>
                <p>60%</p>
            </div>

        </div> 
    );
  }
  
}

export default ProgressBar;