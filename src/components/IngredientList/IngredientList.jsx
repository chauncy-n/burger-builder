import React, {Component} from 'react';
import Ingredient from '../Ingredient/Ingredient'



class IngredientList extends Component {
    render() {
        var ingredients = this.props.ingredients.map((ingredient, idx) => <Ingredient ingredient={ingredient} addToStack={this.props.addToStack}/>)
        return(
            <div className='boxes'>{ingredients}</div>
        )
    }
}

export default IngredientList;
