import React, {Fragment, useState, useEffect } from 'react';
import { Link, withRouter} from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {createProfile, getCurrentProfile} from '../../actions/profile';
import {metier, gouvernorat } from '../const/data'




const EditProfile = ({ profile:{ profile, loading }, createProfile, getCurrentProfile, history }) => {
    const [formData, setFormData] = useState({
        
        job:'',
        location:'',
        phone: null,
        tarif:'',
        description:''
  });

useEffect(() => {
    getCurrentProfile();

    setFormData({
        job: loading || !profile.job ? '' : profile.job,
        location: loading || !profile.location ? '' : profile.location,
        phone: loading || !profile.phone ? '' : profile.phone,
        tarif: loading || !profile.tarif ? '' : profile.tarif,
        description: loading || !profile.description ? '' : profile.description,
    });
}, [loading,  getCurrentProfile]);

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
createProfile(formData, history, true)
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

{/* 
  <select name="job"  value={job} onChange={e => onChange(e)} >

  <option value="" selected data-default>select your job field</option>
  <option  value="Chauffage Climatisation"> Chauffage Climatisation </option>
  <option value="Electricité"> Electricité </option>
  <option value="Jardinage"> Jardinage </option>
  <option value="Lavage auto à domicile"> Lavage auto à domicile  </option>
  <option value="Plomberie "> Plomberie </option>
  <option value="Peintre"> Peintre </option>
 <option value="Menuiserie"> Menuiserie</option>
 <option value="Maçonnerie"> Maçonnerie </option>
 <option value="Rénovation Immobilière"> Rénovation Immobilière </option>
 </select> */}

{/* <select name="location" value={location} onChange={e => onChange(e)} >

    <option value="" selected data-default>select your location</option>
    <option   value="Ariana" > Ariana</option>
    <option   value="Béja" > Béja</option>
    <option   value="Ben Arous" >Ben Arous </option>
    <option   value="Bizerte" >Bizerte </option>
    <option   value="Gabès" >Gabès </option>
    <option   value="Gafsa" > Gafsa</option>
    <option   value="Jendouba" >Jendouba </option>
    <option   value="Kairouan" > Kairouan</option>
    <option   value="Kasserine" > Kasserine</option>
    <option   value="Kébili" >Kébili </option>
    <option   value="Le Kef" > Le Kef</option>
    <option   value="Mahdia" > Mahdia</option>
    <option   value="La Manouba" >La Manouba </option>
    <option   value="Médenine" >Médenine </option>
    <option   value="Monastir" >Monastir </option>
    <option   value="Nabeul" >	Nabeul </option>
    <option   value="Sfax" > Sfax</option>
    <option   value="Sidi Bouzid" >Sidi Bouzid </option>
    <option   value="Siliana" >Siliana </option>
    <option   value="Sousse" > Sousse</option>
    <option   value="Tataouine" >Tataouine </option>
    <option   value="Tozeur" >Tozeur </option>
    <option   value="Tunis" > Tunis </option>
    <option   value="Zaghouan" >Zaghouan </option>
</select> */}
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
                    <a href='/dashboard'>Go back</a>
                    </div>

                  
            </form>
            </Fragment>
    )
}

EditProfile.propTypes = {
    createProfile: propTypes.func.isRequired,
    getCurrentProfile: propTypes.func.isRequired,
    profile: propTypes.object.isRequired,

};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile));
