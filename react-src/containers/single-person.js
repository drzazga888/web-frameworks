import React from 'react';
import { fetchPerson, deletePerson } from '../api';
import PersonDetails from '../presentional/person-details';

class SinglePerson extends React.PureComponent {

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
  
  _deletePerson() {
	  deletePerson(this.props.match.params.personId, this).then(() => {
		  this.props.history.push('/');
	  });
  }

  render() {
	  return (
		  <div>
		  	<h2>Podgląd osoby</h2>
		  	<PersonDetails person={this.state.person} onDelete={() => this._deletePerson()} />
		  </div>
	  );
  }

}

export default SinglePerson;
