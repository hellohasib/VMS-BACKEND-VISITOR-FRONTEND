import  React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing'
import NewVisitor from './components/visitor/NewVisitor'
import ThankYou from './components/ThankYou'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          
          <div className="container">
            <Switch>
              {/* {(window.sessionStorage.getItem("key"))?
                  <Redirect from="/login" to="/profile" component={Profile}/>                  
                  :
                  <Redirect from="/" to="/login" />
              } */}
              <Route exact path="/new_visitor" component={NewVisitor} />  
              <Route exact path="/thank_you" component={ThankYou} />
            </Switch>
            
          </div>
          
        </div>
      </Router>
    )
  }
}

export default App