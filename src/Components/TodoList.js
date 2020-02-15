import React, { Component } from 'react'
import TodoItem from './TodoItem';
export default class TodoList extends Component {
    render() {
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {
                    this.props.items.map(item => {
                        return(
                            <TodoItem key={item.id}
                                    title={item.title}
                                    handleDelete={() => this.props.handleDelete(item.id)}
                                    handleEdit={() => this.props.handleEdit(item.id)} />
                        )
                    })
                }
                <button type="submit" className="btn btn-danger btn-block text-capitalize mt-5" onClick={this.props.clearList} >
                    clear list
                </button>
            </ul>
        )
    }
}
