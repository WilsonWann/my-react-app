import React from 'react';

class Blog extends React.Component {
    render() {
        return (
            <div>
                <SideBar posts={this.props.posts} />
                <hr />
                {
                    this.props.posts.map(post => (
                        <Content key={post.id} title={post.title} content={post.content} />
                    ))
                }
            </div>
        )
    }
}

function SideBar(props) {
    return (
        <ul>
            {props.posts.map(post =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
}

function Content(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Blog;