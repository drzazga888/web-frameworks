import React from 'react';
import { fetchPeople } from '../api';
import PeopleListTable from '../presentional/people-list-table';

class PeopleList extends React.PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			people: null,
			search: '',
			orderBy: 'lname'
		};
	}

	componentDidMount() {
		this._fetchPeople();
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (prevState.search !== this.state.search || prevState.orderBy !== this.state.orderBy) {
			this._fetchPeople();
		}
	}
	
	_fetchPeople() {
		fetchPeople(this.state.search, this.state.orderBy, this).done(data => {
			this.setState({
				people: data
			});
		});
	}
	
	changeSearch(search) {
		this.setState({
			search: search
		});
	}
	
	changeOrderBy(orderBy) {
		this.setState({
			orderBy: orderBy
		});
	}

	render() {
		return (
			<div>
				<h2>Lista osób</h2>
				<p>
					Filtrowanie:&nbsp;
					<input type="text" value={this.state.search} onChange={(e) => this.changeSearch(e.target.value)} />&nbsp;
					<button disabled={!this.state.search.length} onClick={(e) => this.changeSearch('')}>Wyczyść</button>&nbsp;
					Sortuj według:&nbsp;
					<select value={this.state.orderBy} onChange={(e) => this.changeOrderBy(e.target.value)}>
						<option value="fname">Imię</option>
						<option value="lname">Nazwisko</option>
						<option value="tel">Telefon</option>
						<option value="email">Email</option>
						<option value="city">Miasto</option>
					</select>
				</p>
				<PeopleListTable people={this.state.people} />
			</div>
		);
	}

}

export default PeopleList;
