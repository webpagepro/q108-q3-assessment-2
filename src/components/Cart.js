import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, Button } from 'reactstrap'

class Cart extends Component {

    _onClickRemoveFromCart = (e) => {
        //alert("Remove To Cart Button")
        e.preventDefault();
        this.props.removeCameraFromCart(this.props.camera.id)
    }


    render() {
        return (
            <div>

                <Card style={{ width: "100%", height: "100%", borderStyle: "none" }} className="card-cart">
                    <CardTitle className="title-cart">Camera Name: {this.props.camera.name}</CardTitle>
                    <CardBody className="body-cart">
                        <i
                            onClick={this._onClickRemoveFromCart}
                            className="fa fa-trash-o"
                        ></i>
                    </CardBody>

                </Card>


            </div>
        );
    }
}

export default Cart;