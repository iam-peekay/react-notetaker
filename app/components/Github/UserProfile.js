var React = require('react');

var UserProfiles = React.createClass({
  render: function () {
    return (
      <div>
        USERs PROFILESss <br />
        Username: {this.props.username} <br />
        Bio: {this.props.bio.name}
      </div>
    )
  }
});

module.exports = UserProfiles;
