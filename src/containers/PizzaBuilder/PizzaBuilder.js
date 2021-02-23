import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/BuildControls/BuildControls';

class PizzaBuilder extends Component {
    state = {
        ingredients:{
            pepperoni:1,
            oil:1
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