import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import ErrorPage from './components/Error/ErrorPage';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProject from './components/Project/AddProject';
import UpadteProject from './components/Project/UpadteProject';
import ProjectBoard from './components/ProjectBoard/ProjectBoard';
import AddProjectTask from './components/ProjectBoard/ProjectTasks/AddProjectTask';
import UpdateProjectTask from './components/ProjectBoard/ProjectTasks/UpdateProjectTask';


function App() {
  return (
    <Switch>
      <Provider store={store}>
          <Header />
          <Route exact path="/dashboard" component = { Dashboard } />
          <Route exact path="/addProject" component = { AddProject } />
          <Route exact path="/updateProject/:id" component = { UpadteProject } />
          <Route exact path="/projectBoard/:id" component = { ProjectBoard } />
          <Route exact path="/addProjectTask/:id" component = { AddProjectTask } />
          <Route exact path="/updateProjectTask/:backlog_id/:pt_id" component = { UpdateProjectTask } />
          <Route exact path="/error" component = { ErrorPage } />
      </Provider>
    </Switch>
  );
}

export default App;
