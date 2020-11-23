import React, { Component } from 'react'
import { register} from './VisitorFunctions'
import axios from 'axios'

class NewVisitor extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      purpose: '',
      companyList: [],
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/users/all_users/")
        .then (response => {
          this.setState({
            companyList: response.data.company_name
          })
        })
        .catch(function(error) {
          console.log(error)
        })
  }

  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newVisitor = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      purpose: this.state.purpose
    }

    register(newVisitor).then(res => {
      this.props.history.push(`/thank_you`)
    })
  }

  render() {
    return (
     
      <div className="vertical-center container-fluid mt-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 col-xs-12 mx-auto">
            <form Validate onSubmit={this.onSubmit}>
              <h1 className="h2 mb-3" style={{textAlign: "center", fontSize: "32px", fontWeight:"bolder"}}>VISITOR REGISTRATION</h1>
              <div className="form-group-lg" style={{fontSize:"x-large"}}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter Your Full Name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group-lg" style={{fontSize:"x-large"}}>
                <label htmlFor="email">Vehicle License</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Vehicle License Number"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group-lg" style={{fontSize:"x-large"}}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  placeholder="Enter Personal Phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group-lg" style={{fontSize:"x-large"}}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Enter Your Address"
                  value={this.state.address}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group-lg" style={{fontSize:"x-large"}}>
                <label htmlFor="phone">Purpose</label>
                <input
                  type="text"
                  className="form-control"
                  name="purpose"
                  placeholder="Enter Destination Company Name"
                  value={this.state.purpose}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-success btn-block" style={{fontSize:"xxx-large", marginTop:"10px"}}
              >
                Register
              </button>
            </form>
          </div>
          
        </div>
      </div>
    )
  }
}

export default NewVisitor