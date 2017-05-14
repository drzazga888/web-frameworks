import Reflux from 'reflux';
import React from 'react';
import { Actions, Store } from '../stores/person';
import { Link } from 'react-router-dom';

class EditPerson extends Reflux.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.store = Store;
    this.onSend = this.onSend.bind(this);
  }

  componentDidMount() {
    Actions.fetchPerson(this.props.match.params.personId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isBusy && !this.state.isBusy) {
      this.props.history.push(`/person/${this.state.person.id}`);
    }
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    Actions.abort();
  }

  onSend() {
    Actions.updatePerson({
      id: this.state.person.id,
      fname: this.refs.fname.value,
      lname: this.refs.lname.value,
      tel: this.refs.tel.value,
      email: this.refs.email.value,
      city: this.refs.city.value
    });
  }

  render() {
    if (this.state.person === null) {
      return <p>Ładowanie...</p>
    } else {
      return (
        <div>
          <p>
            ID: {this.state.person.id}
          </p>
          <p>
            <label>Imię: <input type="text" defaultValue={this.state.person.fname} ref="fname" /></label>
          </p>
          <p>
            <label>Nazwisko: <input type="text" defaultValue={this.state.person.lname} ref="lname" /></label>
          </p>
          <p>
            <label>Telefon: <input type="text" defaultValue={this.state.person.tel} ref="tel" /></label>
          </p>
          <p>
            <label>E-mail: <input type="text" defaultValue={this.state.person.email} ref="email" /></label>
          </p>
          <p>
            <label>Miasto: <input type="text" defaultValue={this.state.person.city} ref="city" /></label>
          </p>
          <p>
            <button onClick={this.onSend}>Wyślij</button>&nbsp;
            <Link className="button" to={`/person/${this.state.person.id}`}>Wróć do podglądu</Link>&nbsp;
            { this.state.isBusy ? 'Przetwarzanie żądania...' : null }
          </p>
        </div>
      );
    }
  }

}

export default EditPerson;
