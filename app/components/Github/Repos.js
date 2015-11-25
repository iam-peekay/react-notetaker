var React = require('react');

var Repos = React.createClass({
  render: function () {
    return (
      <div> REPOSss<br />
        Username: {this.props.username} <br />
        REPOSs: {this.props.repos} </div>
    )
  }
});

module.exports = Repos;
