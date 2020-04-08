import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { counterApp } from './reducers/index';
import ComponentWithConnectionToRedux from './containers/Counter';

const store = createStore(counterApp)

function App() {
  return (
    <Provider store = {store}>
      <div className="App">        
        <ComponentWithConnectionToRedux />
      </div>      
    </Provider>
  );
}

export default App;
