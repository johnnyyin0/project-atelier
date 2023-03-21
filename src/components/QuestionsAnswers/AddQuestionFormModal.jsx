import axios from 'axios';
import React, { useState } from 'react';

const AddQuestionFormModal = ({ closeModal, productName, productId={productId}}) => {
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
//   const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form data:', {params: { product_id: productId, body: question, name, email}})
    axios.post('http://localhost:3000/questions/ask', {params: { product_id: productId, body: question, name, email}})
    .then((response) => {
        // console.log('Answer submitted successfully', response.data);
        closeModal();
      })
      .catch((error) => {
        console.error('Error submitting answer', error);
      });
  };

  return (
    <div className='question-answer-modal-overlay'>
      <div className='question-answer-modal-box'>
        <span className='close' onClick={closeModal}>
          &times;
        </span>
        <h1><b>ASK YOUR QUESTION</b></h1>
        <h2><b>PRODUCT: {productName}</b></h2>
        <h2><b>* Indicates a required field</b></h2>
        <form onSubmit={handleSubmit}>
          <p>
            <label className='label' htmlFor='nickname'>
              <span className='label-text'>
                Nickname*
              </span>
            </label>
            <input
              type='text'
              placeholder='Example: jackson11!'
              className='input input-bordered w-full max-w-xs'
              value={name}
              onChange={(e) => setName(e.target.value)}
              id='nickname'
              required
            />
            <div>
              <i>
               <small>*For privacy reasons, do not use your full name or email address!</small> 
              </i>
            </div>
            <label className='label' htmlFor='email'>
              <span className='label-text'>Your Email*</span>
            </label>
            <input
              type='email'
              placeholder='Example: jackson@example.com'
              className='input input-bordered w-full max-w-xs'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='email'
              required
            />
            <div>
              <i>
                <small>*For authentication reasons, you will not be emailed!</small>
              </i>
            </div>
            <label className='label' htmlFor='question'>
              <span className='label-text'>Your Question*</span>
            </label>
            <textarea
              placeholder='Type your question here...'
              className='input input-bordered w-full max-w-xs'
              rows='3'
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              id='question'
              maxLength={1000}
              required
            />
          </p>
          <button className='btn' style={{ marginTop: '20px' }} type='submit'>
            SUBMIT
          </button>
        </form>

        {/* {errorMsg && (
          <div className='error-msg'>
            <h4>You must enter the following:</h4>
            <p>{errorMsg}</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default AddQuestionFormModal;