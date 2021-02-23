import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import Pizza from '../../components/Pizza/Pizza';

class PizzaBuilder extends Component {
    state = {
        ingredients:{
            pep1:1
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