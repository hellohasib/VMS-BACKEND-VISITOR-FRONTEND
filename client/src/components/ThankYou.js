import React, { Component } from 'react'

class ThankYou extends Component {
  render() {
    return (
    <div class="jumbotron">
        <div class="container mt-5">
            <h2>Thanks For Registration</h2>
            <h3>You can now go to your desired destination.</h3>
            <h4>Have a nice day at BHTPA.</h4>
            
            <p><a class="btn btn-lg btn-success" href="/new_visitor" role="button">Register As a Guest</a></p>
        </div>
    </div>
    )
  }
}

export default ThankYou