import React, { useEffect, Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import { getProfileById } from '../../actions/profile';
import ProfileUser from './profileUser';



const Profile = ({ getProfileById, 
profile: { profile, loading},
auth,
match,

}) => {
    useEffect(() =>{
        getProfileById(match.params.id);
    }, [getProfileById] )
    
    return (<Fragment>
        {profile === null || loading ? ( 
        <Spinner /> ) : (
        <Fragment>
            <Link to='/profiles'>
                Back to profiles list 
                </Link>
            {auth.isAuthenticated && 
            auth.loading === false && 
            auth.user._id === profile.user._id && (
            <Link to='/edit-profile'>
                Edit Profile
                </Link>
                )}
            <div>
            <ProfileUser profile={profile}/>
           </div>
        </Fragment> 
        )}
        
        
    </Fragment>
    );
};

Profile.propTypes = {
    getProfileById: propTypes.func.isRequired,
    profile: propTypes.object.isRequired,
    auth: propTypes.object.isRequired,

};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);

