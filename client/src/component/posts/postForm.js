import React, { useState} from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [formData, setFormData]=useState({
   text: '',
   

});
const{text}=formData;
const onChange= e => setFormData({...formData,[e.target.name]:e.target.value});
    return (
        <div>
        <div >
          <h3>Ajouter post</h3>
        </div>
        <form  onSubmit={e => {
            e.preventDefault();
            addPost({ text });
           
        }}>
          <textarea
            name="text"
            value={text}
            onChange={e=>onChange(e)}
            >

            </textarea>
          <input type="submit"  value="Submit" />
        </form>
      </div>
    )
}

PostForm.propTypes = {
    addPost: propTypes.func.isRequired,
}

export default connect(null, { addPost })(PostForm)
