import React, {Fragment, useState } from 'react';
import { Link, withRouter} from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {createProfile} from '../../actions/profile';
import {metier, gouvernorat } from '../const/data'



const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        
        job:'',
        location:'',
        phone: null,
        tarif:'',
        description:''
  });

const {
    job,
    location,
    phone,
    tarif,
    description
}  = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

const onSubmit = e => {
e.preventDefault();
createProfile(formData, history)
}

    return (
       <Fragment>
           <h1>Create your Profile </h1>
           <p>Let's get some information to make profile stand out</p>
 <form onSubmit={e => onSubmit(e)}>

 <select name="job" value={job} onChange={e => onChange(e)}>
  <option value="">select your job field</option>
  {metier.map((el, index) => {
    return <option key={index} >{el}</option>;
  })}
</select>

<select name="location" value={location} onChange={e => onChange(e)}>
  <option value="">select your location</option>
  {gouvernorat.map((loc, index) => {
    return <option key={index} >{loc}</option>;
  })}
</select>
    


  



                       <input value={phone} onChange={e => onChange(e)} 
                        name="phone"
                        type="text"
                        placeholder="Phone..."
                        
                    />
                    <input value={tarif} onChange={e => onChange(e)}
                        name="tarif"
                        type="text"
                        placeholder="tarif..."
                    

                    />
                     <input value={description} onChange={e => onChange(e)}
                        name="description"
                        type="text"
                        placeholder="description..."
                    

                    />

                    <div>
                    <input
                        type="submit"
                        value="Submit"
                      
                    />
                    <a href=''>Go back</a>
                    </div>

                  
            </form>
            </Fragment>
    )
}

CreateProfile.propTypes = {
    createProfile: propTypes.func.isRequired

};


export default connect(null, { createProfile })(withRouter(CreateProfile));
