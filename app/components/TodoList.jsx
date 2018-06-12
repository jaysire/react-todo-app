var React = require('react');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} />
        );
      });
    };
  return 
  (<div>
    test
  </div>) 
  }
});

module.exports = TodoList;
