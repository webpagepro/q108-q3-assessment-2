import React, { Component } from 'react';
import { Row, Col, Input, Button, Card, CardTitle} from 'reactstrap'
import Cart from './Cart'

class CartList extends Component {
    render() {
       let cartedCameras = this.props.cartItems.map(camera => 
        <Cart key={camera.id}  camera={camera}
        />
       )
       return(
<div>
<Row className="row-right-column">
<Card className="basket-container">Your Cart
{cartedCameras}
 <CardTitle><h5>Subtotal: ${this.props.cartItems.reduce((sub, camera) => {
            return sub + camera.price}, 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </h5> </CardTitle>
            <CardTitle><h5>Tax: ${this.props.cartItems.reduce((tax, camera) => {
            return tax + camera.price * .086}, 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </h5> </CardTitle>  
            <CardTitle><h5>Total: ${this.props.cartItems.reduce((accumulator, camera) => {
            return accumulator + camera.price + camera.price * .086}, 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </h5> </CardTitle>   
           

            <Button className="checkout-btn">CHECKOUT</Button>  
            </Card>
            </Row></div>
        );
    }
}

export default CartList;