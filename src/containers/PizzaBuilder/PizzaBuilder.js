import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import Pizza from '../../components/Pizza/Pizza';

class PizzaBuilder extends Component {
    render() {
        return (
            <Auxiliary>
                <Pizza />
                <div>Build controls</div>
            </Auxiliary>
        )
    }
}
export default PizzaBuilder;