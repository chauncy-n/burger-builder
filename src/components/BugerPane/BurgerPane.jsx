import React, {Component} from 'react';
import BurgerStack from '../BurgerStack/BurgerStack';

const BurgerPane = (props)  => {
   let ingredients = props.ingredients.map(ing  => <p> {ing.name}</p>)
    return(
            <div className="boxes">burger pane
               {ingredients}
            <BurgerStack />
            </div>
    ) 
};

export default BurgerPane;




