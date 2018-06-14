var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function () {
    // This is how we fetch/ grab the Todo attributes from our TodoList file;
    var {id, text, completed, createdAt} = this.props;
    var renderDate = () => {
    var message = 'Created ';
    var timestamp = createdAt;

    return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

  return (
    // This is how/ where we render out our attributes. Specify what to show on browser.
    <div onClick={() => {
      this.props.onToggle(id);
      // this is how we get/ fetch the onToggle and render it out; 
    }}>
      <input type="checkbox" checked={completed} />
      <p>{text}</p>
      <p>{renderDate()}</p>
    </div>
    ) 
  }
});

module.exports = Todo;
