import React, { Component } from 'react';
import TopNavBar from './components/TopNavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import CartList from './components/CartList'
import Cameras from './components/Cameras'
import { Container, Row, Col } from 'reactstrap'
import axios from 'axios'

/*router.get('/cameras', cameras.getAll)
router.get('/cameras/:id', cameras.getOne)
router.post('/cameras', cameras.addOne)
router.patch('/cameras/:id', cameras.updateOne)
router.delete('/cameras/:id', cameras.deleteBook)
*/


class App extends Component {

state = {
  cameras: [],
  isLoading:true,
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


addCameraToCart = id => {
  console.log("ADD", `http:/localhost:8000/cameras/${id}`)
  axios.patch(`http://localhost:8000/cameras/${id}`, {
    inCart: true
  })
    .then(res => {
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

removeCameraFromCart = id => {
  console.log("REMOVE", `http:/localhost:8000/cameras/${id}`)
  axios.patch(`http://localhost:8000/cameras/${id}`, {
    inCart: false
  })
    .then(res => {
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

  render() {
    console.log("App ", this.state.cameras)
    let cartItems = this.state.cameras.filter(camera => camera.inCart == true)

    console.log("cartItems", cartItems)

    return (
     
      <Container>
      <Header/>
      <TopNavBar/>
     <Row>
     <Cameras cameras={this.state.cameras} 
        addCameraToCart={this.addCameraToCart}
     /> 
    
    
       <CartList cartItems={this.state.cameras.filter(camera => camera.inCart != false)}
           removeCameraFromCart={this.removeCameraFromCart}      
                   />
         </Row>              
          <Footer />
      </Container>
    );
  }
}

export default App;
