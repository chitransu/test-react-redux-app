import React, { Component } from 'react';

class CommentList extends Component{

    renderComments(){
         return this.props.commentList.map(comment => <li key={comment}>{comment}</li>)
    }

    render(){
        return(
            <div>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

export default CommentList;