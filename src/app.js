import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import { HashRouter as Router, Route } from 'react-router-dom';
import { fetchUser } from "./actions";
import { connect } from "react-redux";

import requireAuth from "./components/auth/requireAuth";
import ResumeLoad from './containers/CVContainerLoad';
import ResumeNew from './components/resumeNew';
import NotFound from './components/notFound';
import SignIn from './components/signIn';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(createStore);

class App extends Component {
  componentWillMount() {
    console.log('test')
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <div id='page'>
          <Route exact path="/" component={ResumeLoad} />
          <Route exact path="/notFound" component={NotFound} />
          <Route exact path="/new" component={requireAuth(ResumeNew)} />
          <Route exact path="/login" component={SignIn} />
          <Route path="/resume/:id" component={ResumeLoad} />
        </div>
      </Router>
    );
  }
}

export default connect(null, { fetchUser })(App);
