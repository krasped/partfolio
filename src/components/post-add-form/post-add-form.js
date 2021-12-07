import React, {Component} from "react";

import './post-add-form.css';

export default class PostAddForm extends Component{
    constructor(props){
        super(props);
        this.onTextChange = this.onTextChange.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
        this.state = {
            text: ""
        }
    }

    onTextChange(e) {
        const newValue = e.target.value;
        this.setState({           
                text: newValue           
        })
    }

    onAddItem(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
                text: ""
        })
    }



    render() {
        return(
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onAddItem}>
                <input
                   type="text"
                   placeholder="О чем вы думаете сейчас"
                   className="form-control new-post-label"
                   onChange={this.onTextChange}
                   value={this.state.text}
                />
                <button
                   type="submit"
                   className="btn btn-outline-secondary"
                >
                Добавить</button>
            </form>
       )
    }
    
}

