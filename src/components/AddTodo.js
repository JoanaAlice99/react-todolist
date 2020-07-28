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
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="name the todo"
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    value="submit"
                    style={{flex: '1'}}
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
