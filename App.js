import React, {Component} from 'react';
import Navbar from '../src/component/Navbar';
import Progress from '../src/component/Progress';
import Calories from '../src/component/Calories';
import './App.css';


class App extends Component {

  state = {
    blur: false,
    nutritionList : [
    {
      id: 1,
      name: 'Apple',
      quantity: '182g',
      calories: '95',
    }, {
      id: 2,
      name: 'Pasta',
      quantity: '57g',
      calories: '75',
    }, {
      id: 3,
      name: 'Rice',
      quantity: '195g',
      calories: '216',
    },]
  }

  blur = () =>{
      this.setState({blur: !this.state.blur})
      console.log(this.state.blur)
  }
  
  render() {
    
    return (
      <div  >
        <div>
          <Navbar />
        </div>
        <div>
          <Progress />
        </div>
        <div>
          <Calories />
        </div>
      </div>
    );
  } 
}

export default App;
