import React, { Component } from "react";

import './search-panel.css';

export default class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        const term = e.target.value;
        this.setState({term});
        this.props.addTerm(term);
    }

    render() {
        return(
            <input
                className="form-control search-input" 
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onChange}   
            />
        
        )
    }
    
}
