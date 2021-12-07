import React from 'react';

import './app-header.css';

const AppHeader = ({posts, liked}) => {
    return (
        <div className="app-header d-flex">
            <h1>Artem Krawtsow</h1>
            <h2>{posts} posts, liked {liked}</h2>
        </div>
    )
}

export default AppHeader;