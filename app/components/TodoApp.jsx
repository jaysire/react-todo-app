// Third Party Modules(download via npm)
var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

// Local Modules(foune in my code)
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos(),
		};
	},

	componentDidUpdate: function() {
		TodoAPI.setTodos(this.state.todos);
	},

	handleAddTodo: function(text) {
		this.setState({
			todos: [
				// this is just setting it to its intial state, we haven't changed/ updated anything just yet.
				...this.state.todos,
				{
					id: uuid(),
					// we used node package to generate a UUA ID(universal unique Identifier);
					// a long random string that uses time stamp to seed the data.
					text: text,
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined,
				},
			],
		});
	},

	handleToggle: function(id) {
		// this is how we updated our todo list of done and not done tasks;
		var updatedTodos = this.state.todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
				todo.completedAt = todo.completed ? moment().unix() : undefined;
			}

			return todo;
		});

		this.setState({ todos: updatedTodos });
	},

	handleSearch: function(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase(),
		});
	},

	render: function() {
		var { todos, showCompleted, searchText } = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

		return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
