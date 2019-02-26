import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, Button } from 'reactstrap'
import ReactStars from 'react-stars'

class Camera extends Component {

    _onClickAddToCart = (e) => {
        //alert("Add To Cart Button")
        e.preventDefault();
        this.props.addCameraToCart(this.props.camera.id)
    }

    ratingChanged = (newRating) => {
        console.log(newRating)
    }

    render() {


        return (
<div>
            <Card style={{ width: "100%", height: "100%", borderStyle: "none" }}>
                    <CardBody>
                    <CardTitle className="title">Camera Name: {this.props.camera.name}</CardTitle>
                    <CardImg src={this.props.camera.picture} alt={this.props.camera.name} />
                    <CardText className="price">Price:&nbsp;${this.props.camera.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</CardText>
                    <CardText className="rating">Rating<ReactStars
                        count={this.props.camera.rating}
                        size={24}
                        color2={'#ffd700'} /></CardText>
                    <CardTitle className="onSale">{`${this.props.camera.onSale ? '***On Sale***' : ''}`}</CardTitle>
                    <Button onClick={this._onClickAddToCart}>Add To Cart</Button>
                </CardBody>

            </Card>
</div>
        );
    }
}

export default Camera;