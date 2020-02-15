import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        return (
            <div className="card card-body my-3">
                <form onSubmit={this.props.handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" placeholder="add a todo item" value={this.props.item}  onChange={this.props.handleChange} />
                    </div>
                    <button type="submit" 
                        className={
                            this.props.editItem ? 
                                "btn btn-block btn-success mt-3":
                                "btn btn-block btn-primary mt-3"
                        } >
                    {this.props.editItem ? 'edit item' : 'add item'} 
                    </button>
                </form>
            </div>
        )
    }
}
