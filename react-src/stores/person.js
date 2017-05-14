import Reflux from 'reflux';
import $ from 'jquery';

const Actions = Reflux.createActions([
  'fetchPerson', 'updatePerson', 'deletePerson', 'abort'
]);

class Store extends Reflux.Store {

  constructor(props) {
    super(props);
    this.state = {
      person: null,
      isBusy: false
    };
    this.listenables = Actions;
  }

  onFetchPerson(personId) {
    this.setState({
      person: null,
      isBusy: false
    });
    setTimeout(function() {
      $.ajax({
        method: 'GET',
        url: `/web-frameworks/rest/person/${personId}`,
        success: function(data) {
          this.setState({
            person: data
          });
        }.bind(this)
      });
    }.bind(this));
  }

  onUpdatePerson(data) {
    this.setState({
      isBusy: true
    });
    setTimeout(function() {
      if (this.ajax) {
        this.ajax.abort();
      }
      this.ajax = $.ajax({
        method: 'PUT',
        url: '/web-frameworks/rest/person/',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function() {
          this.setState({
            isBusy: false
          });
        }.bind(this)
      });
    }.bind(this));
  }

  onDeletePerson(personId) {
    this.setState({
      isBusy: true
    });
    setTimeout(function() {
      if (this.ajax) {
        this.ajax.abort();
      }
      this.ajax = $.ajax({
        method: 'DELETE',
        url: `/web-frameworks/rest/person/${personId}`,
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
