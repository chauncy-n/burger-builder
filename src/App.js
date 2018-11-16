import React, { Component } from 'react';
import './App.css';
import IngredientList from './components/IngredientList/IngredientList';
import BurgerPane from './components/BugerPane/BurgerPane';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
    ],
      stack: []
    }
    this.addToStack = this.addToStack.bind(this)
  }
  addToStack(ingredient) {
    let stack = this.state.stack.slice()
    stack.push(ingredient)
    this.setState({stack: stack})
  }
  render() {
    return (
      <div className="App">
        <div className="ingredientList">
        <IngredientList ingredients={this.state.ingredients}
        addToStack={this.addToStack}        
        />
        </div>
        <BurgerPane />
    
      </div>
    );
  }
}

export default App;
