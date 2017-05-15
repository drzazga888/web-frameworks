import React from 'react';
import { Link } from 'react-router-dom';

const PeopleListTable = ({ people }) => {
	
	if (!people) {
		return <p>Ładowanie...</p>;
	}
	
	if (!people.length) {
		return <p>Brak wyników spełniających kryteria :(</p>;
	}

  let rows = people.map(person => (
    <tr key={person.id}>
      <td>{person.id}</td>
      <td>{person.fname}</td>
      <td>{person.lname}</td>
      <td>{person.tel}</td>
      <td>{person.email}</td>
      <td>{person.city}</td>
      <td>
        <Link to={`/person/${person.id}`}>Podgląd</Link>
      </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Telefon</th>
          <th>E-mail</th>
          <th>Miasto</th>
          <th>Akcje</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );

};

export default PeopleListTable;
