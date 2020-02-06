import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './card.css';

const Card = ({ profile: {
    user: {_id, name, avatar},
    job,
    location,
    
}
}) => {
    return (
        <div className="userCard">

            <div className="picture">
            <img src={avatar} alt=""  />
            </div>
            
            <div className="team-content">
            <h2 className="name"> {name} </h2>
            <h3 className="title"> {job} </h3>
            <h4 className="title"> {location} </h4>
            </div>
            
            <div className="profile">
            <Link to={`/profile/${_id}`} >
                <span className="viewProfile" >Voir Profile</span>
            </Link>
            </div>

            
            
        </div>
    )
}

Card.propTypes = {
    
    profile: propTypes.object.isRequired

}

export default Card;
