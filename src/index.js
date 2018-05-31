import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import { HashRouter as Router, Route } from 'react-router-dom';

import ResumeLoad from './containers/CVContainerLoad';
import ResumeNew from './components/resumeNew';
import NotFound from './components/notFound';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route exact path="/" component={ResumeLoad} />
        <Route exact path="/notFound" component={NotFound} />
        <Route exact path="/new" component={ResumeNew} />
        <Route path="/resume/:id" component={ResumeLoad} />
      </div>
    </Router>

  </Provider>
  , document.getElementById('root'));
