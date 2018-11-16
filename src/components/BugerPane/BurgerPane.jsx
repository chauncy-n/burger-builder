import React, {Component} from 'react';
import BurgerStack from '../BurgerStack/BurgerStack';

class BurgerPane extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        var burgerstack = this.props.stack.map((stack, idx) => <BurgerStack stack={stack}/>)
        return(
            <div className="boxes">{this.props.stack.ingredient}</div>
        )
    }
}

export default BurgerPane;




