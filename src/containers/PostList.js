import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';

function PostList({ posts }) {
    if (posts.isloading) {
        return <div>Loading...</div>;
    }

    if (posts.error) {
        return <div>Error Fetching data</div>;
    }

    return (
        <section className="marginTop30">
            {posts.data.map(post => (
                <div className="col-4">
                    <Post post={post} key={post.id} />
                </div>
            ))}
        </section>
    );
}

const mapStateToProps = state => ({
    posts: state.posts,
});

export default connect(mapStateToProps)(PostList);
