import React, { Component } from 'react';
import TopNavBar from './components/TopNavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import CartList from './components/CartList'
import Cameras from './components/Cameras'
import { Container, Row, Col } from 'reactstrap'
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

addCameraToCart = (id) => { 
  console.log("FETCH", `http://localhost:8000/cameras/${id}`)
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
        cameras: [
          ...prevState, this.state.cameras
        ]
      };
    });
  });
};

  render() {
    console.log("App ", this.state.cameras)
    let cartItems = this.state.cameras.filter(camera => camera.inCart == true)

    console.log("cartItems", cartItems)

    return (
     
      <Container>
      <Header/>
      <TopNavBar/>
     <Row>
     <Cameras cameras={this.state.cameras.filter(camera => camera.inCart != true)} /> 
    
    
       <CartList cartItems={this.state.cameras.filter(camera => camera.inCart != false)}
                  addCameraToCart={this.addCameraToCart}
                   />
         </Row>              
          <Footer />
      </Container>
    );
  }
}

export default App;
