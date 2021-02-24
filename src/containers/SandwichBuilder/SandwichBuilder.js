import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import Sandwich from '../../components/Sandwich/Sandwich';
import BuildControls from '../../components/BuildControls/BuildControls';

class SandwichBuilder extends Component {
    state = {
        ingredients:{
            pepperoni:25,
            oil:5
        }
    }
    render() {
        return (
            <Auxiliary>
                <Sandwich ingredients={this.state.ingredients} />
                <BuildControls />
            </Auxiliary>
        )
    }
}
export default SandwichBuilder;