import React, { Component } from 'react';


class Header extends Component {

  render() {
    return (
      <div>
        <p className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="#"><div className="cartTitle"> Camera Shop</div></a>
        </p>
        <a className="header-links" target="_blank" href="https://github.com/webpagepro/q108-q3-assessment-retake"><span className="github"> Github</span></a>
        <a className="header-links2" target="_blank" href="https://github.com/webpagepro/q108-q3-assessment-retake/tree/master/src/components"><span className="components"> Components</span></a>
      </div>
    )

  }

}

export default Header