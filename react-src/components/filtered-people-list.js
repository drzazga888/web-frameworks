import React from 'react';
import { Link } from 'react-router-dom';

const FilteredPeopleList = ({ people, search }) => {

  let lcasedSearch = search.toLowerCase();

  let filtered = people.filter(item => (
    item.id.toString().split(lcasedSearch).length > 1 ||
    item.fname.toLowerCase().split(lcasedSearch).length > 1 ||
    item.lname.toLowerCase().split(lcasedSearch).length > 1 ||
    item.tel.toLowerCase().split(lcasedSearch).length > 1 ||
    item.email.toLowerCase().split(lcasedSearch).length > 1 ||
    item.city.toLowerCase().split(lcasedSearch).length > 1
  ));

  let rows = filtered.map(person => (
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

export default FilteredPeopleList;
