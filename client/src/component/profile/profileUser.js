import React from 'react';
import propTypes from 'prop-types';


const ProfileUser = ({profile: {job, location, phone, tarif, description, user: {name, email, avatar}}}) => {

    return (
        <div>
        <img src={avatar} alt="img"/>
        <h2>{name}</h2>
        <h2>{job}</h2>
        <h2>{tarif}</h2>
        <h2>{location}</h2>
        <span>Contacts</span>
        <h3>{email}</h3>
        <h2>{phone}</h2>
        <p>{description}</p>



        </div>
    )
}

ProfileUser.propTypes = {

    profile: propTypes.object.isRequired
}

export default ProfileUser;



