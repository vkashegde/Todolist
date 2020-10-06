import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css'
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
        this.props.createTodo({...this.state,id:uuidv4(),completed:false})
        this.setState({task:""})
    }
    
    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task"></label>
                <input type="text" name="task" placeholder="New Todo" id="task" value={this.state.task}
                onChange={this.handleChange}/>

                <button>Add Todo</button>
            </form>
        );
    }
}

export default NewTodoForm
