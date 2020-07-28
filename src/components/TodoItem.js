import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = (completed) => {
        if (completed) {
            return {
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: 'line-through'
            }
        } else {
            return {
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: 'none'
            }
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle(this.props.todo.completed)}>
                <p>
                    <input 
                        type="checkbox" 
                        onChange={this.props.markComplete.bind(this,id)} 
                    />
                    {' '}{title}
                    <button 
                        style={btnStyle} 
                        onClick={this.props.delTodo.bind(this, id)}>
                    x
                    </button>
                </p>   
            </div>
        )
    }

}

// PropTypes
TodoItem.protoTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '7px 10px',
    borderRadius: '50%',
    float: 'right'
}

export default TodoItem
