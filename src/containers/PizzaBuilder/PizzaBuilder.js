import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import Pizza from '../../components/Pizza/Pizza';

class PizzaBuilder extends Component {
    state = {
        ingredients:{
            pepper:1
        }
    }
    render() {
        return (
            <Auxiliary>
                <Pizza ingredients={this.state.ingredients} />
                <div>Build controls</div>
            </Auxiliary>
        )
    }
}
export default PizzaBuilder;