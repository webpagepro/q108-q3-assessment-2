import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap'

class Camera extends Component {
    render() {
        return (
            <div>


                <Card style={{ width: "100%", height: "100%", borderStyle:"none" }}>

                    <CardBody>
                        <CardTitle>Camera Name: {this.props.camera.name}</CardTitle>
                        <CardImg src={this.props.camera.picture} alt={this.props.camera.name} />
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Camera;