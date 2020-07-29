import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component{

    render(){
        return this.props.todos.map((todo) => (
            <div style={todosStyle}>
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    markComplete={this.props.markComplete} 
                    delTodo={this.props.delTodo}
                />
            </div>
        ));
    }

}

// PropTypes
Todos.protoTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const todosStyle = {
    margin: "auto",
    width: "75%"
}

export default Todos;