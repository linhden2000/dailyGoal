import React, {Component} from 'react';
import '../App.css';
import Nutrition from './Nutrition';

class NutritionList extends Component {
 constructor() {
   super ();
   this.state = {
     search: ''
   };
 }

 updateSearch(e) {
   this.setState({search: e.target.value.substr(0,20)});
 }

  render(){
    const filteredNutrition = this.props.nutritionList.filter(
      (Nutrition) => {
        return Nutrition.name.indexOf(this.state.search) !== -1;
      }
    );
    return (
        <div>
          <input type = "text" value={this.state.search} onChange= {this.updateSearch.bind(this)} />
          <ul>
            {filteredNutrition.map((nutritionList)=> {
              return <Nutrition Nutrition = {Nutrition}
                  key={Nutrition.id}/>
            })}

          </ul>  
          
        </div> 
    );
  }
  
}

export default NutritionList;