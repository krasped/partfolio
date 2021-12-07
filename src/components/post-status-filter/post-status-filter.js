import React, { Component } from "react";

import './post-status-filter.css';


export default class PostStatusFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter : props.filter
        }
        this.button = [
            {name:"all", filter:"Все"},
            {name:"like", filter:"Понравилось"}
        ]

        this.onChangeFilter = this.onChangeFilter.bind(this);

    }

    onChangeFilter(filter){
        this.setState({filter});
        this.props.addFilter(filter);
    }

    render(){
        const buttons = this.button.map(({name, filter}) => {
            const clazz = (name === this.state.filter)?" btn btn-info":" btn btn-outline-secondary";
            return (               
                <button 
                    key={name} 
                    type="button" 
                    className={`btn ${clazz}`}
                    onClick={() => this.onChangeFilter(name)}
                >
                    {filter}
                </button>
            )
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
            
        )
    }   
}

