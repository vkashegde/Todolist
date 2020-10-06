import React, { Component } from 'react'
class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            task:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        this.props.createTodo(this.state)
        this.setState({task:""})
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task"></label>
                <input type="text" name="task" placeholder="new task" id="task" value={this.state.task}
                onChange={this.handleChange}/>

                <button>Add Todo</button>
            </form>
        );
    }
}

export default NewTodoForm
