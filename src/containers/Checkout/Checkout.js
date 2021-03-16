import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'


class Checkout extends Component {
    state={
        salad:1,
        bacon:1,
        meat:1,
        cheese:1
    }
    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} />
            </div>
        )
    }
}

export default  Checkout;