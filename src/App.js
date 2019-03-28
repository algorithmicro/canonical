// App.js

import React, { Component } from 'react';
import PostList from './containers/PostList';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <PostList />
                </div>
            </div>
        );
    }
}

export default App;
