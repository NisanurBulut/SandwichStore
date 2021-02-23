import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/BuildControls/BuildControls';

class PizzaBuilder extends Component {
    state = {
        ingredients:{
            pepperoni:25,
            oil:5
        }
    }
    render() {
        return (
            <Auxiliary>
                <Pizza ingredients={this.state.ingredients} />
                <BuildControls />
            </Auxiliary>
        )
    }
}
export default PizzaBuilder;