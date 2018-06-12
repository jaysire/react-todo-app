
var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Do laundry.'
        }, {
          id: 2,
          text: 'Clean backyard.'
        }, {
          id: 3,
          text: 'Do gorcery shopping.'
        }, {
          id: 4,
          text: 'Go to the gym, sauna and/or pool.'
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
