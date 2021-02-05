import React, { Component} from "react";

export default class AddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: '',
        }
    }

    //Note: some html tags automarically sends an event argument to handlers

    handleOnChange = (e) => {
        this.setState({
            //Keep state in sync with input
            content: e.target.value,
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault(); //prevents refresh
        this.props.onAdd(this.state);
        this.setState({
            content: "",
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>
                        Add new todo
                    </label>
                    <input type="text" onChange={this.handleOnChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}