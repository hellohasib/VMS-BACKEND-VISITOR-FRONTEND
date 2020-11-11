import React, { Component } from 'react'
import axios from 'axios'

class EditVisitor extends Component {
  constructor(props) {
    super(props);
    this.setName = this.setName.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setPhone = this.setPhone.bind(this)
    this.setAddress = this.setAddress.bind(this)
    this.setPurpose = this.setPurpose.bind(this)
    
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      purpose: ''
    }
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/visitors/all_visitors/" + this.props.match.params.id)
        .then (response => {
          this.setState({
            name: response.data.name,
            email: response.data.email,
            phone: response.data.phone,
            address: response.data.address,
            purpose: response.data.purpose
          })
        })
        .catch(function(error) {
          console.log(error)
        })
  }
  setName(e) {
    this.setState({
      name: e.target.value
    });
  }
  setEmail(e){
      this.setState({
          email: e.target.value
      })
  }
  setPhone(e){
    this.setState({
        phone: e.target.value
    })
  }
  setAddress(e){
    this.setState({
        address: e.target.value
    })
  }
  setPurpose(e){
    this.setState({
        purpose: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    const response = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      purpose: this.state.purpose
    }
    console.log(response)
    axios.put('http://localhost:5000/visitors/all_visitors/edit/'+this.props.match.params.id,response)
        .then(res => console.log(res.data))
    
    this.props.history.replace('/all_visitors')
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h2 mb-3 font-weight-normal" style={{textAlign: "center"}}>Edit Visitor</h1>
              <div className="form-group">
                <label htmlFor="name">Update Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Update Full Name"
                  value={this.state.name}
                  onChange={this.setName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Update Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Update Email Address"
                  value={this.state.email}
                  onChange={this.setEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Update Phone Number</label>
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={this.state.phone}
                  onChange={this.setPhone}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Update Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Enter Your Address"
                  value={this.state.address}
                  onChange={this.setAddress}
                />
              </div>
              <div className="form-group">
                <label htmlFor="purpose">Update Purpose</label>
                <input
                  type="text"
                  className="form-control"
                  name="purpose"
                  placeholder="Enter Your Purpose of Visit"
                  value={this.state.purpose}
                  onChange={this.setPurpose}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
               Update Visitor
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default EditVisitor