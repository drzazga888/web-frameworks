import React from 'react';
import { Switch, HashRouter as Router, Route, NavLink } from 'react-router-dom';
import PeopleList from './people-list';
import SinglePerson from './single-person';
import EditPerson from './edit-person';

const App = () => (
  <Router>
    <div>
      <header>
        <h1>Aplikacja "Ludzie"</h1>
        <p>Klient stworzony w ramach zadania domowego do lab4, użyto frameworka <strong>ReactJS</strong></p>
        <NavLink activeClassName="active" to="/">Lista ludzi</NavLink>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={PeopleList} />
          <Route exact path="/person/:personId" component={SinglePerson} />
          <Route exact path="/person/:personId/edit" component={EditPerson} />
          <Route component={() => <p>Niestety, strony nie znaleziono :(</p>} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
