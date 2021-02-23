import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import Pizza from '../../components/Pizza/Pizza';

class PizzaBuilder extends Component {
    state = {
        ingredients:{
            pepperoni:0,
            oil:0
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