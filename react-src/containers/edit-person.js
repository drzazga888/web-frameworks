import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPerson, editPerson } from '../api';
import PersonForm from '../presentional/person-form';

class EditPerson extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
    	person: null
    };
  }

  componentDidMount() {
    this._fetchPerson();
  }
  
  _fetchPerson() {
	  fetchPerson(this.props.match.params.personId, this).then(data => {
          this.setState({
            person: data
          });
      });
  }
  
  _editPerson(data) {
	  data.id = this.props.match.params.personId;
	  editPerson(data, this).then(() => {
    	  this.props.history.push(`/person/${data.id}/`);
      });
  }

  render() {
	  return (
		<div>
			<h2>Edytuj osobę (ID = {this.props.match.params.personId})</h2>
			{ this.state.person ? <PersonForm person={this.state.person} onSend={(data) => this._editPerson(data)} /> : <p>Ładowanie...</p> }
			<Link className="button" to={`/person/${this.props.match.params.personId}`}>Wróć do podglądu</Link>
		</div>
	  );
  }

}

export default EditPerson;
