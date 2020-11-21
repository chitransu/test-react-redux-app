import React, { Component } from 'react';
import CommentList from './CommentList'

class CommentBox extends Component{

    state = {
        comment: '',
        comments: []
    }

    handleChange = (event) => {
            this.setState({
                comment: event.target.value
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.state.comments.push(this.state.comment);
        this.setState({
            comment: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add comment</h4>
                    <textarea value={this.state.comment} onChange={this.handleChange}/>
                    <div>
                        <button>Save Comment</button>
                    </div>
                </form>
                <div>
                    {<CommentList commentList={this.state.comments} />}
                </div>
            </div>
        )
    }
}

export default CommentBox;