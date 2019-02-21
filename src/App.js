import React, { Component } from 'react';
import TopNavBar from './components/TopNavBar'
import Header from './components/Header'
import Footer from './components/Footer'
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
  cameras: []
}

componentDidMount = async () => {
  try {
    const res = await fetch('http://localhost:8000/cameras')
    if (!res.ok) {
      throw new Error('API request failed.')
    }
    const cameras = await res.json()
      this.setState({
        cameras: cameras,
      }) 
       console.log("App DidMount", cameras)

  }

  catch (error) {
    this.setState({ error: true })
  }
}
  render() {
    console.log("App ", this.state.cameras)

    return (
     
      <Container>
      <Header/>
      <TopNavBar/>
      <Col>
     <Cameras cameras={this.state.cameras} /> 
     </Col>
     <Footer />
      </Container>
    );
  }
}

export default App;
