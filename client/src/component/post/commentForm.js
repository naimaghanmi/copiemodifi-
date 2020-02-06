import React, { useState } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment} from '../../actions/post'


const CommentForm = ({postId,  addComment }) => {
    const [formData, setFormData]=useState({
        text: '',
        
     
     });
     const{text}=formData;
     const onChange= e => setFormData({...formData,[e.target.name]:e.target.value});
    return (
        <div>
        <div >
          <h3>Ajouter Commentaire </h3>
        </div>
        <form  onSubmit={e => {
            e.preventDefault();
            addComment(postId, { text });
           
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

CommentForm.propTypes = {
    addComment: propTypes.func.isRequired,
}

export default connect(null, {  addComment }) (CommentForm)
