import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="addTodoForm">
                <input
                    className="inputForm"
                    type="text" 
                    name="title" 
                    placeholder="name the todo"
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    className="submitForm"
                    type="submit"
                    value="Add"
                />
            </form>
        )
    }
}

// PropTypes
AddTodo.protoTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
