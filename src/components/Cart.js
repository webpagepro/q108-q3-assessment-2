import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, Button } from 'reactstrap'

class Cart extends Component {


    
    render() {
        return (
            <div>

<Card style={{ width: "100%", height: "100%", borderStyle: "none" }} className="card-cart">
<CardTitle className="title-cart">Camera Name: {this.props.camera.name}</CardTitle>
<CardBody className="body-cart">
    
     <i
                    className="fa fa-trash-o"
                    ></i>
</CardBody>

</Card>

                  
            </div>
        );
    }
}

export default Cart;