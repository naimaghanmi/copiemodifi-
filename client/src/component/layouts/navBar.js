import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {logout} from '../../actions/auth';
import './navbar.css'
 const navBar = ({ auth: {isAuthenticated, loading}, logout}) => {
     const authLinks = (
        <ul className="left">
         <div className='haut'>
        <li><Link to='/' style={{textDecoration:"none",color:"#002F36"}} >LOGO</Link></li>
         <li><Link to='/profiles' style={{textDecoration:"none",color:"#002F36"}}>
            Agents</Link></li>

            <li><Link to='/posts' style={{textDecoration:"none"}}>
            Posts</Link></li>

        <li><Link to='/dashboard' style={{textDecoration:"none"}}>
            dashboard</Link></li>

            </div>
         <div className='right'>
        <li><a  onClick={logout} href='/login'>
            <button>Connexion</button></a></li>
            </div>
    </ul>

     );

     const guestLinks = (
        <ul className="left">
                   <div className='haut'>
                   <li><Link to='/' style={{textDecoration:"none",color:"#002F36"}} >LOGO</Link></li>
                   <li><Link to='/quinous' style={{textDecoration:"none",color:"#002F36"}}>Qui somme nous?</Link ></li>
                    <li >
                  <Link  to='/marche' style={{textDecoration:"none",color:"#002F36"}}>Comment ça marche?</Link >
                  </li>

                   </div>
                   
       <div className='right'>
       <button className="inscription"><Link to='/register' style={{textDecoration:"none"}}>Inscription </Link></button>
        <button><Link to="/login" style={{textDecoration:"none"}}>Connexion</Link></button>
        </div>
    </ul>
     );

    return (
        <div className="main-header">
     <nav className='header'>
        
    { !loading && (<Fragment> { isAuthenticated ? authLinks : guestLinks} </Fragment>)}

     </nav>
     </div>
  
    )
};

navBar.propTypes = {
    logout: propTypes.func.isRequired,
    auth: propTypes.object.isRequired
};

const mapStateToProps = state=> ({
auth: state.auth
});


export default connect(mapStateToProps, {logout}) (navBar);

