import React, { Component } from 'react';
import TopNavBar from './components/TopNavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import CartList from './components/CartList'
import Cameras from './components/Cameras'
import { Container, Row, Col } from 'reactstrap'
//import axios from 'axios'

/*router.get('/cameras', cameras.getAll)
router.get('/cameras/:id', cameras.getOne)
router.post('/cameras', cameras.addOne)
router.patch('/cameras/:id', cameras.updateOne)
router.delete('/cameras/:id', cameras.deleteBook)
*/


class App extends Component {

  state = {
    cameras: [],
    isLoading: true,
    error: null
  }

  componentDidMount = async () => {
    try {
      const res = await fetch('http://localhost:8000/cameras')
      if (!res.ok) {
        throw new Error('API request failed.')
      }
      const cameras = await res.json()
      this.setState({
        cameras: cameras
      })
      console.log("App DidMount", cameras)

    }

    catch (error) {
      this.setState({ error: true })
    }
  }

  // FETCH ADD CAMERA TO CART FUNCTION
  addCameraToCart = (id) => {
    return fetch(`http://localhost:8000/cameras/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          inCart: true
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      .then(json => {
        this.setState(prevState => {
          return {
            cameras: prevState.cameras.map(camera => {
              if (camera.id == id) {
                camera.inCart = true
              }
              return camera
            })
          }
        })
      })
  }

  // FETCH REMOVE CAMERA FROM CART FUNCTION
  removeCameraFromCart = (id) => {
    return fetch(`http://localhost:8000/cameras/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          inCart: false
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      .then(json => {
        this.setState(prevState => {
          return {
            cameras: prevState.cameras.map(camera => {
              if (camera.id == id) {
                camera.inCart = false
              }
              return camera
            })
          }

        })
      })
  }
  /**************** AXIOS  ADD and REMOVE CAMERA FUNCTIONS  ***************
   addCameraToCart = id => {
      console.log("ADD", `http:/localhost:8000/cameras/${id}`)
      axios.patch(`http://localhost:8000/cameras/${id}`, {
        //object key and new value  
        inCart: true
      })
        .then(res => {
          this.setState({
            cameras: this.state.cameras.map(camera => {
              if (camera.id == id) {
                camera.inCart = true
              }
              return camera
  
            })
  
          })
        })
    }
  
    removeCameraFromCart = id => {
      axios.patch(`http://localhost:8000/cameras/${id}`, {
        //object key and new value  
        inCart: false
      })
        .then(res => {
          this.setState(prevState => {
           return{
  
            cameras: prevState.cameras.map(camera => {
              if (camera.id == id) {
                camera.inCart = false
              }
              return camera;
            })
          }
          })
        })
          }
  *************************************************************/

  render() {
    console.log("App ", this.state.cameras)
    let cartItems = this.state.cameras.filter(camera => camera.inCart == true)

    //console.log("cartItems", cartItems)

    return (
      <div>
        <Container>
          <Header />
          <TopNavBar />
          <Row>
            <Cameras cameras={this.state.cameras}
              addCameraToCart={this.addCameraToCart}
            />

            <CartList cartItems={cartItems}
              removeCameraFromCart={this.removeCameraFromCart}
            />
          </Row>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
