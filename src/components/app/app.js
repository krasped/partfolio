import React, { Component }  from "react";
import {Col, Row, Container} from 'reactstrap';
import Header from "../header";
import ToDo from "../to-do-app/app"; 
import "./app.css";

export default class App extends Component {
    state = {
        app: null
    }

    onChouseApp = (app) => {
        (this.state.app === app) ? this.setState({app: null}) : this.setState({app: app})
        
        console.log(this.state.app);
    }

    render(){
        const toDO = (this.state.app === "toDo") ? <ToDo/> : null;
        return(
            <>
                <Container>
                    <Header/>
                </Container>
                <Container>
                    <button className="btn btn-primary" onClick={() => this.onChouseApp("toDo")}>todoList</button>
                    <div >
                        {toDO}
                                              
                    </div>                    
                    
                </Container>
            </>
        )
    }
}