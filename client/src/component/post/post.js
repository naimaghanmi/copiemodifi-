import React, {Fragment, useEffect} from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import PostItem from '../posts/postItem'
import CommentForm from '../post/commentForm';
import CommentItem from '../post/commentItem'


import { getPost} from '../../actions/post';


const Post = ({ getPost, post: { post, loading}, match}) => {
    useEffect(() =>  {
        getPost(match.params.id);
       }, [getPost])
    return loading  || post === null ? <Spinner /> : <Fragment>
        <Link to='/posts'> Retour </Link>
        <PostItem post={post} reactionPost={false} />
        
        <CommentForm postId={post._id} />
        <div>
            {post.comments.map(comment => (
            <CommentItem key={comment._id} comment={comment} postId={post._id} />

            ))}
        </div>

    </Fragment>
}

Post.propTypes = {
    getPost: propTypes.func.isRequired,
    post: propTypes.object.isRequired,

}
const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPost }) (Post)
