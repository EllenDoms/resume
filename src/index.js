import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ResumeLoad from './containers/CVContainerLoad';
import ResumeNew from './components/resumeNew';
import NotFound from './components/notFound';
import SignIn from './components/signIn';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch> {/* Switch so / is not /... Most specific route on top */}
          <Route path="/resume/:id" component={ResumeLoad} />
          <Route path="/notFound" component={NotFound} />
          <Route path="/new" component={ResumeNew} />
          <Route path="/signin" component={SignIn} />
          <Route path="/" component={ResumeLoad} />
        </Switch>
      </div>
    </BrowserRouter>

  </Provider>
  , document.getElementById('root'));
