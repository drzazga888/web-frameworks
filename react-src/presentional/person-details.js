import React from 'react';
import { Link } from 'react-router-dom';

const PersonDetails = ({ person, onDelete }) => {
	
	if (!person) {
      return <p>Ładowanie...</p>
    }
	
	  return (
	    <div>
	      <dl>
	        <dt>ID</dt>
	        <dd>{person.id}</dd>
	        <dt>Imię</dt>
	        <dd>{person.fname}</dd>
	        <dt>Nazwisko</dt>
	        <dd>{person.lname}</dd>
	        <dt>Telefon</dt>
	        <dd>{person.tel}</dd>
	        <dt>E-mail</dt>
	        <dd>{person.email}</dd>
	        <dt>Miasto</dt>
	        <dd>{person.city}</dd>
	      </dl>
	      <p>
	        <Link className="button" to={`/person/${person.id}/edit`}>Edytuj</Link>&nbsp;
	        <button onClick={onDelete}>Usuń</button>
	      </p>
	    </div>
	  );

};

export default PersonDetails;