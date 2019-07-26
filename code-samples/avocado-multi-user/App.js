import React from 'react';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/';
import thunk from 'redux-thunk';
import Loading from './screens/loading';

const store = createStore(reducer, applyMiddleware(thunk));

 export default class App extends React.Component {

  render() {
      return (
          <Provider store={store}>
              <Loading/>
          </Provider>
      );
  }

}