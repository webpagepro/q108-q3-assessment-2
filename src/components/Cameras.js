import React, { Component } from 'react';
import Camera from './Camera'
import { Row, Col, Input } from 'reactstrap'

class Cameras extends Component {
    state={
        filtered:''
    }

    _onChangeFilter = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
        console.log("Cameras - onChange", name, value)
    }
    
    render() {
        console.log("Cameras ", this.props.cameras)
        let camerasList = this.props.cameras.map(camera =>
            <Camera key={camera.id}
                camera={camera}
            />
        )
        return (
            <div>
          <Input
            name="filtered"
            onChange={this._onChangeFilter}
            value={this.state.filtered}
          />
                <Row>
                    
                    {camerasList}
                </Row>
                
            </div>
        );
    }
}

export default Cameras;