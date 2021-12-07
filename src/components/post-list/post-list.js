import React from "react";
import PostListItem from "../post-list-item";

import './post-list.css';


const PostList = ({posts, onDelete, onImportant, onLiked}) => {

    const elements = posts.map((item) => { //можно использовать PostListItem {...item}
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem 
                label={item.label} 
                important={item.important}
                like = {item.like}
                onDelete={() => onDelete(item.id)}            
                onImportant={() => onImportant(item.id)}
                onLiked={() => onLiked(item.id)}/>
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul> 
    )
}

export default PostList;