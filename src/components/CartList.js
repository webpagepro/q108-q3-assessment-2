import React, { Component } from 'react';
import { Row, Col, Input, Button, Card, CardTitle} from 'reactstrap'
import Cart from './Cart'

class CartList extends Component {
    render() {
       let cartedCameras = this.props.cartItems.map(camera => 
        <Cart key={camera.id}  camera={camera}
        addCameraToCart={this.props.addCameraToCart}
        />
       )
       return(
<div>
<Col className="right-column">
<Card className="basket-container">Your Cart
{cartedCameras}
 <CardTitle className="totals"><h5>Subtotal: ${this.props.cartItems.reduce((sub, camera) => {
            return sub + camera.price}, 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </h5> </CardTitle>
            <CardTitle className="totals"><h5>Tax: ${this.props.cartItems.reduce((tax, camera) => {
            return tax + camera.price * .086}, 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </h5> </CardTitle>  
            <CardTitle className="totals"><h5>Total: ${this.props.cartItems.reduce((accumulator, camera) => {
            return accumulator + camera.price + camera.price * .086}, 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </h5> </CardTitle>   
           

            <Button className="checkout-btn">CHECKOUT</Button>  
            </Card>
            </Col></div>
        );
    }
}

export default CartList;