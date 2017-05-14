import Reflux from 'reflux';
import $ from 'jquery';

const Actions = Reflux.createActions([
  'fetchPeople', 'createPerson', 'abort'
]);

class Store extends Reflux.Store {

  constructor(props) {
    super(props);
    this.state = {
      people: null,
      isBusy: false
    };
    this.listenables = Actions;
  }

  onFetchPeople() {
    this.setState({
      people: null
    });
    setTimeout(function() {
      $.ajax({
        method: 'GET',
        url: '/web-frameworks/rest/person/',
        success: function(data) {
          this.setState({
            people: data
          });
        }.bind(this)
      });
    }.bind(this));
  }

  onCreatePerson() {
    this.setState({
      isBusy: true
    });
    setTimeout(function() {
      if (this.ajax) {
        this.ajax.abort();
      }
      this.ajax = $.ajax({
        method: 'POST',
        url: '/web-frameworks/rest/person/',
        contentType: 'application/json',
        data: JSON.stringify({
          fname: 'Zmień imię',
          lname: 'Zmien nazwisko',
          tel: 'Zmień telefon',
          email: 'Zmień email',
          city: 'Zmień miasto'
        }),
        success: function() {
          this.setState({
            isBusy: false
          });
        }.bind(this)
      });
    }.bind(this));
  }

  onAbort() {
    if (this.ajax) {
      this.ajax.abort();
    }
    this.setState({
      isBusy: false
    });
  }

}

export { Actions, Store };
