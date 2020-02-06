import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import DashboardAction from './DashboardAction';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';


const Dashboard = ({ getCurrentProfile, deleteAccount,  auth: { user } , 
    profile: {profile, loading}}) => {

    useEffect(() => {
    getCurrentProfile();
    }, [getCurrentProfile]);



    return loading && profile === null ? <Spinner/> : <Fragment> 
         <h1> dashboard</h1>
         <p> welcome { user && user.name } </p>
         {profile !== null ? (
         <Fragment>
             <DashboardAction />
             <div>
                 <button onClick={() => deleteAccount()}>
                     Delete My Account
                 </button>
             </div>
         </Fragment>
         ) : (
         <Fragment><p>You have not yet setup a profile, please add some info</p>
         <Link to="/create-profile" >
             Create Profile
         </Link>
         </Fragment>
         ) }
         
    </Fragment>;
};

Dashboard.propTypes = {
    getCurrentProfile: propTypes.func.isRequired,
    deleteAccount: propTypes.func.isRequired,
    auth: propTypes.object.isRequired,
    profile: propTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
