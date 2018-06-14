var React = require('react');

var TodoList = require('TodoList');

var AddTodo = require('AddTodo');

var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Check the  mail'
        }, {
          id: 2,
          text: 'Go for a bike ride'
        }, {
          id: 3,
          text: 'Clean the backyard'
        }, {
          id: 4,
          text: 'Practise Javascript algorithms'
        }
      ]
    };
  },

  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase(),
    });
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
      <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
