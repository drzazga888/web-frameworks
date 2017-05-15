import React from 'react';
import { createPerson } from '../api';
import PersonForm from '../presentional/person-form';

class CreatePerson extends React.PureComponent {

  _createPerson(data) {
	  createPerson(data, this).then(() => {
    	  this.props.history.push(`/`);
      });
  }

  render() {
	  return (
		<div>
			<h2>Stwórz osobę</h2>
			<PersonForm onSend={(data) => this._createPerson(data)} />
		</div>
	  );
  }


}

export default CreatePerson;
