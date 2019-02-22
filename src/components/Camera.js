import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, Button } from 'reactstrap'

class Camera extends Component {
    render() {
        return (
            <div>


                <Card style={{ width: "100%", height: "100%", borderStyle: "none" }}>

                    <CardBody>
                        <CardTitle className="title">Camera Name: {this.props.camera.name}</CardTitle>
                        <CardImg src={this.props.camera.picture} alt={this.props.camera.name} />
                        <CardText className="price">Price:&nbsp;${this.props.camera.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</CardText>
                        <CardText className="rating">Rating:&nbsp;{this.props.camera.rating} of 4 stars</CardText>
                        <CardTitle className="onSale">{`${this.props.camera.onSale ? '***On Sale***' : ''}`}</CardTitle>
                        <Button>Add To Cart {this.props.camera.id}</Button>
                    </CardBody>

                </Card>

            </div>
        );
    }
}

export default Camera;