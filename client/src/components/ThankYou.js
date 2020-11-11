import React, { Component } from 'react'

class ThankYou extends Component {
  render() {
    return (
      <div className="container">
      <div className="jumbotron mt-5">
        <div className="col-md-6 col-sx-6 mx-auto">
          <h1 className="text-center">Thanks For Registration</h1>
          <h3 className="text-center mb-5">
              Now You Can Go To Your Desired Destination.
          </h3>
          <p className="text-center"><a className="btn btn-block btn-lg btn-success" style={{fontSize:"xx-large"}} href="/new_visitor" role="button">Register As a Guest</a></p>
        </div>
      </div>
    </div>
    )
  }
}

export default ThankYou