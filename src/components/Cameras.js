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
        let camerasList = this.props.cameras
        .filter(camera => camera.name.includes(this.state.filtered)
        || camera.name.toUpperCase().includes(this.state.filtered)
        || camera.name.toLowerCase().includes(this.state.filtered)
        )
        .map(camera => <Camera key={camera.id} camera={camera}
        addCameraToCart={this.props.addCameraToCart}
        />)

    

        return (
            <div>
          <Input className="filter"
            name="filtered"
            onChange={this._onChangeFilter}
            value={this.state.filtered}
            placeholder="Filter what you're looking for here"
          />
           <Col className="left-column">
            
                    
                    {camerasList}
                </Col>
                
            </div>
        );
    }
}

export default Cameras;