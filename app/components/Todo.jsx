var React = require('react');

var Todo = React.createClass({
  render: function () {
    // This is how we fetch/ grab the Todo attributes from our TodoList file;
    var {id, text, completed} = this.props;

  return (
    // This is how/ where we render out our attributes. Specify what to show on browser.
    <div onClick={() => {
      this.props.onToggle(id);
      // this is how we get/ fetch the onToggle and render it out; 
    }}>
      <input type="checkbox" checked={completed} />
      {text}
    </div>
    ) 
  }
});

module.exports = Todo;
