var React = require('react');
var ReactDOM = require('react-dom');

var AddNote = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  },

  handleSubmit: function () {
    var newNote = ReactDOM.findDOMNode(this.refs.note).value;
    ReactDOM.findDOMNode(this.refs.note).value = '';
    this.props.addNote(newNote);
  },

  render: function () {
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref="note" placeholder="Add new note" />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}> Submit </button>
        </span>
      </div>
    )
  }
});

module.exports = AddNote;
