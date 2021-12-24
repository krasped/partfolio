//10минута интересно

import React, {Component} from "react";
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                { 
                    label: "Going to lern",
                    important: true,
                    like: true,
                    id:1 
                },
                {
                    label: "Going ta lern",
                    important: true,
                    like: false,
                    id:2 
                },
                {
                    label: "Going tb lern",
                    important: false ,
                    like: false,
                    id:3
                }
            ],
            term : '',
            filter: 'all'
        };
        
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.toggleLiked = this.toggleLiked.bind(this);
        this.toggleImportant = this.toggleImportant.bind(this);
        this.updateTerm = this.updateTerm.bind(this);
        this.updateFilter = this.updateFilter.bind(this);

        this.maxId = 4;
    }

    searchPosts(posts, term){
        if(term.length === 0 ){
            return posts;
        }
        return posts.filter((item) => {
            return item.label.indexOf(term) > -1 
        });
    }

    filterPosts(posts, filter){
        if(filter ==="like"){
            return posts.filter((item) => item.like)
        } else return (
            posts
            );
    }


    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [
                ...data, newItem
            ];
            return {
                data: newArr
            }
        });

    }
    
    toggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            let tog = !data[index].like;
            data[index].like = tog;
            return{
                data
            }
        });       
    }

    toggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            let tog = !data[index].important;
            data[index].important = tog;
            return{
                data
            }
            
        }); 
    }

    updateTerm(term) {
        this.setState({term});
    }

    updateFilter(filter){
        this.setState({filter});
    }
    

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPosts(this.searchPosts(data, term), filter);
        return (
            <div className="app">
                <AppHeader
                posts={allPosts}
                liked={liked}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        addTerm={this.updateTerm}/>
                    <PostStatusFilter
                        filter={filter}
                        addFilter={this.updateFilter}/>
    
                </div>
                <PostList posts={visiblePosts}
                        onDelete={this.deleteItem}
                        onImportant={this.toggleImportant}
                        onLiked={this.toggleLiked}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        )    
    }
    
}