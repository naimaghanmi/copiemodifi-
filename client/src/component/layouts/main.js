import React from 'react';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import propTypes from 'prop-types';
import videoHome from '../folder/videoHome.mp4';
import './main.css'


const Main = ({isAuthenticated}) => {

    // if(isAuthenticated){
    //    return  <Redirect to='/dashboard' />


    // }
    return (
        <div className="mainSection"> 
         

         <video id="background-video" src={videoHome}  width="100%"  autoPlay muted loop />
         <div className="content">
         <h4 id="pub">Nouveau services de dépannage a domicile en Tunisie 24h de serveillace et 7 jours de disponibilité</h4>

         <button id="btnn">
           
          <Link to='/profiles' style={{textDecoration:"none",color:"#002F36"}}> 
          
            Agents</Link> </button>
            </div>
        
    
        </div>
    )
}

Main.propTypes = {
    isAuthenticated: propTypes.bool,

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps)(Main);
