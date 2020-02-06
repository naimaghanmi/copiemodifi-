import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({ 
  addLike, 
  removeLike,
  deletePost,
  auth, 
  post: { _id, text, name, avatar, user, likes, comments, date },
  reactionPost
}) => {

    return (
       <div >
          <div>
            <Link to={`/profile/${user}`}>
              <img
               
                src={avatar}
                alt=""
              />
             <h4>{name}</h4>
            </Link>
          </div>
          <div>
            <p >
             {text}
            </p>
             <p class="post-date">
              Posted on  <Moment format='YYYY/MM/DD'> {date} </Moment> 
            </p>

            {reactionPost && <Fragment>
              <button onClick={e => addLike(_id)}
            type="button" >
             
              <span>  {likes.length > 0 && <span > {likes.length} </span>}</span>
               
            </button>
            <button onClick={e => removeLike(_id)}
            type="button" >
             
              <span>  unlike </span>
               
            </button>
         
            <Link to={`/posts/${_id}`}>
              Commentaire {' '}
              {comments.length > 0 && (
              <span class='comment-count'> {comments.length} </span>

              )}
            </Link>
            {!auth.loading && user === auth.user._id && (

            <button  onClick={e => deletePost(_id)}
            type="button">
              delete post
             </button>

            )}
           
              </Fragment>}
            
          </div>
        </div>
    )
}

PostItem.defaultProps = {
  reactionPost: true
}

PostItem.propTypes = {
    post: propTypes.object.isRequired,
    auth: propTypes.object.isRequired,
    addLike: propTypes.func.isRequired,
    removeLike: propTypes.func.isRequired,
    deletePost: propTypes.func.isRequired,

}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost } )(PostItem);
