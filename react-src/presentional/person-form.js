import React from 'react';

class PersonForm extends React.PureComponent {
	
	onClick() {
		this.props.onSend({
        	fname: this.refs.fname.value,
        	lname: this.refs.lname.value,
        	tel: this.refs.tel.value,
        	email: this.refs.email.value,
        	city: this.refs.city.value
        });
	}
	
	render() {
		
	      return (
	        <div>
	          <p>
	            <label>Imię: <input type="text" defaultValue={this.props.person ? this.props.person.fname : ''} ref="fname" /></label>
	          </p>
	          <p>
	            <label>Nazwisko: <input type="text" defaultValue={this.props.person ? this.props.person.lname : ''} ref="lname" /></label>
	          </p>
	          <p>
	            <label>Telefon: <input type="text" defaultValue={this.props.person ? this.props.person.tel : ''} ref="tel" /></label>
	          </p>
	          <p>
	            <label>E-mail: <input type="text" defaultValue={this.props.person ? this.props.person.email : ''} ref="email" /></label>
	          </p>
	          <p>
	            <label>Miasto: <input type="text" defaultValue={this.props.person ? this.props.person.city : ''} ref="city" /></label>
	          </p>
	          <p>
	            <button onClick={() => this.onClick()}>Wyślij</button>&nbsp;
	          </p>
	        </div>
	      );
      
	}
	
}

export default PersonForm;