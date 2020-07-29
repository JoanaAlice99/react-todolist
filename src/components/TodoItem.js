import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = (completed) => {
        if (completed) {
            return {
                background: 'white',
                color: "#c7c7c7",
                padding: '20px',
                border: "0px",
                transition: '0.5s'
            }
        } else {
            return {
                background: 'white',
                color: "black",
                padding: '20px',
                border: "0px",
                transition: '0.5s'
            }
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle(this.props.todo.completed)}>
                <p>

                    <label class="container">

                        <input
                            type="checkbox" 
                            onChange={this.props.markComplete.bind(this,id)} 
                        />
                        <span className="checkmark"></span>

                        {' '}{title}

                        <button 
                            className="btnStyle"
                            onClick={this.props.delTodo.bind(this, id)}>
                        x
                        </button>

                    </label>

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

export default TodoItem
