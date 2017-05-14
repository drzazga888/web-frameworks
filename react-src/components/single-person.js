import Reflux from 'reflux';
import React from 'react';
import { Actions, Store } from '../stores/person';
import { Link } from 'react-router-dom';

class SinglePerson extends Reflux.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.store = Store;
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    Actions.fetchPerson(this.props.match.params.personId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isBusy && !this.state.isBusy) {
      this.props.history.push('/');
    }
  }

  onDelete() {
    Actions.deletePerson(this.state.person.id);
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    Actions.abort();
  }

  render() {
    if (this.state.person === null) {
      return <p>Ładowanie...</p>
    } else {
      return (
        <div>
          <dl>
            <dt>ID</dt>
            <dd>{this.state.person.id}</dd>
            <dt>Imię</dt>
            <dd>{this.state.person.fname}</dd>
            <dt>Nazwisko</dt>
            <dd>{this.state.person.lname}</dd>
            <dt>Telefon</dt>
            <dd>{this.state.person.tel}</dd>
            <dt>E-mail</dt>
            <dd>{this.state.person.email}</dd>
            <dt>Miasto</dt>
            <dd>{this.state.person.city}</dd>
          </dl>
          <p>
            <Link className="button" to={`/person/${this.state.person.id}/edit`}>Edytuj</Link>&nbsp;
            <button onClick={this.onDelete}>Usuń</button>&nbsp;
            { this.state.isBusy ? 'Przetwarzanie żądania...' : null }
          </p>
        </div>
      );
    }
  }

}

export default SinglePerson;
