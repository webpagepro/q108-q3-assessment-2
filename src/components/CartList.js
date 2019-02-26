import React, { Component } from 'react';
import { Row, Col, Input, Button, Card, CardTitle } from 'reactstrap'
import Cart from './Cart'

class CartList extends Component {
    render() {
        console.log("CartList ", this)



        let cartedCameras = this.props.cartItems.map(camera =>
            <Cart key={camera.id} camera={camera}
                removeCameraFromCart={this.props.removeCameraFromCart}
            />
        )
        return (
            <div>
                <Col className="right-column">
                    <Card className="basket-container"><span className="your-cart">Your Cart</span>
                        {cartedCameras}
                        <CardTitle className="totals"><h5>Subtotal: ${this.props.cartItems.reduce((sub, camera) => {
                            return sub + camera.price
                        }, 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </h5> </CardTitle>
                        <CardTitle className="totals"><h5>Tax: ${this.props.cartItems.reduce((tax, camera) => {
                            return tax + camera.price * .086
                        }, 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </h5> </CardTitle>
                        <CardTitle className="total">Total: ${this.props.cartItems.reduce((accumulator, camera) => {
                            return accumulator + camera.price + camera.price * .086
                        }, 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </CardTitle>


                        <Button className="checkout-btn">CHECKOUT</Button>
                    </Card>
                </Col></div>
        );
    }
}

export default CartList;