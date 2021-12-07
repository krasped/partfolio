import React from "react";

import './post-list-item.css';


const PostListItem = ({label, important = false, like = false, onDelete, 
                         onImportant, onLiked}) => {

    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
        classNames += " important";
    }
    if (like){
        classNames += " like";
    }
    return (
        <div className={classNames}>
            <span className="app-list-item-label" onClick={onLiked}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-item-center">
                <button
                    type="btn" 
                    className="btn-star btn-sm"
                    onClick={onImportant}>
                    <i className="fa fa-star"></i>

                </button> 
                <button
                    type="btn" 
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    )
}

export default PostListItem;