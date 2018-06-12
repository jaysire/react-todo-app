var React = require('react');

var Todo = React.createClass({
  render: function () {
    // This is how we fetch/ grab the Todo attributes from our TodoList file;
    var {id, text} = this.props;

  return (
    // This is how/ where we render out our attributes. Specify what to show on browser.
    <div>
      {id}. {text}
    </div>
    ) 
  }
});

module.exports = Todo;
