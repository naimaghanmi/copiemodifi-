import React from 'react';
import {Link} from 'react-router-dom';

 const DashboardAction = () => {
    return (
        <div class="dash-buttons">
        <Link  to='/edit-profile'>
        <i class="fas fa-user-circle text-primary"></i> Edit Profile
        </Link>
        </div>
       
    
    )
}

export default  DashboardAction;