import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from "./redux/store";
import BelloteroApp from "./views/BelloteroApp";

function App() {
  return (
    <Provider store={store}>
      <BelloteroApp />
    </Provider>
  );
}

export default App;
