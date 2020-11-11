import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/new_visitor" className="nav-link">
              Add Visitor
            </Link>
          </li>
        </ul>
      </div>
      
    )

    const userLink = (
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              User
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/all_visitors" className="nav-link">
              All Visitor
            </Link>
          </li>
          <li className="nav-item">
            <a href="/#" onClick={this.logOut.bind(this)} className="nav-link">
              Logout
            </a>
          </li>
        </ul>
      </div>
      
    )
    return (
      <div id="navbarCollapse" class="collapse navbar-collapse">
          <nav className="navbar  navbar-inverse">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample10"
            aria-controls="navbarsExample10"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample10"
          >
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
            </ul>
            {localStorage.usertoken ? userLink : loginRegLink}
          </div>
        </nav>
      </div>
        
    )
  }
}

export default withRouter(Landing)