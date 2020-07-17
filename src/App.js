import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import  ErrorPage  from './components/Error/ErrorPage';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProject from './components/Project/AddProject';
import UpadteProject from './components/Project/UpadteProject';


function App() {
  return (
    <Provider store={store}>
      <Switch>
        <div className="App">
          <Header />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProject} />
          <Route exact path="/updateProject/:id" component={UpadteProject} />
          <Route exact path="/error" component={ErrorPage} />
        </div>
      </Switch>
    </Provider>
  );
}

export default App;
