import React, { Fragment, useEffect} from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import PostItem from './postItem';
import PostForm from './postForm';

import { getPosts } from '../../actions/post';


const Posts = ({ getPosts, post:{ posts, loading }}) => {
    useEffect(() => {
        getPosts();
     }, [getPosts])

    return  loading ?  <Spinner /> :   <Fragment> 
            <h1> Posts </h1> 
            <p>Welcome to the Community</p>
            <PostForm />

            <div>
    {posts.map(post => <PostItem key={post._id} post={post} />)}
            </div>


        </Fragment> 
        
    
   
};

Posts.propTypes = {
getPosts: propTypes.func.isRequired,
post: propTypes.object.isRequired,
};

const mapStateToProps = state => ({
    post: state.post

});

export default connect(mapStateToProps, { getPosts })(Posts);
