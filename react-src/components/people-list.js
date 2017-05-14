import Reflux from 'reflux';
import React from 'react';
import { Actions, Store } from '../stores/people';
import FilteredPeopleList from './filtered-people-list';

class PeopleList extends Reflux.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.store = Store;
    this.onChange = this.onChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.createPerson = this.createPerson.bind(this);
  }

  componentDidMount() {
    Actions.fetchPeople();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isBusy && !this.state.isBusy) {
      Actions.fetchPeople();
    }
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    Actions.abort();
  }

  createPerson() {
    Actions.createPerson();
  }

  onChange(e) {
    this.setState({
      search: e.target.value
    });
  }

  clearSearch() {
    this.setState({
      search: ''
    });
  }

  render() {
    if (this.state.people === null) {
      return <p>Ładowanie...</p>
    } else {
      return (
        <div>
          <p>
            Filtrowanie:&nbsp;
            <input type="text" value={this.state.search} onChange={this.onChange} />&nbsp;
            <button disabled={!this.state.search.length} onClick={this.clearSearch}>Wyczysc</button>
          </p>
          <p>
            <FilteredPeopleList search={this.state.search} people={this.state.people} />
          </p>
          <button onClick={this.createPerson}>Utwórz nową osobę</button>&nbsp;
          { this.state.isBusy ? 'Przetwarzanie żądania...' : null }
        </div>
      );
    }
  }

}

export default PeopleList;
