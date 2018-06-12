
var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Do laundry'
        }, {
          id: 2,
          text: 'Clean the backyard'
        }
      ]
    }
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
       <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
