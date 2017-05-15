import React from 'react';
import { Switch, HashRouter as Router, Route, NavLink } from 'react-router-dom';
import PeopleList from './containers/people-list';
import SinglePerson from './containers/single-person';
import EditPerson from './containers/edit-person';
import CreatePerson from './containers/create-person';

const App = () => (
  <Router>
    <div>
      <header>
        <h1>Aplikacja "Ludzie"</h1>
        <p>Przykład wykorzystania frameworka <strong>ReactJS</strong> do REST-owego klienta bazy "Ludzie"</p>
        <NavLink to="/">Lista ludzi</NavLink>&nbsp;
        <NavLink to="/person/create">Utwórz nową osobę</NavLink>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={PeopleList} />
          <Route exact path="/person/create" component={CreatePerson} />
          <Route exact path="/person/:personId" component={SinglePerson} />
          <Route exact path="/person/:personId/edit" component={EditPerson} />
          <Route component={() => <p>Niestety, strony nie znaleziono :(</p>} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
