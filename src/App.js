import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostsForm from './components/Postsform';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostsForm />
          <hr/>
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
