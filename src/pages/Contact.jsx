import { useState, useEffect } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');

  const validateEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const handleEmailBlur = () => {
    setIsEmailValid(validateEmail(email));
    setStatusMessage(validateEmail(email) ? '' : 'Email not valid.');
  };

  useEffect(() => {
    if (statusMessage === 'Info received!') {
      const timeout = setTimeout(() => setStatusMessage(''), 5000);
      return () => clearTimeout(timeout);
    }
  }, [statusMessage]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) setStatusMessage('Please fill out your name.');
    else if (!message) setStatusMessage('Please write a message.');
    else if (!isEmailValid) setStatusMessage('Please provide an email.');
    else {
      setStatusMessage('Info received!');
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className='contact'>
      <h1>Contact</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Name: </label>
          <input type='text' placeholder='your name' value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className='form-group'>
          <label>Email: </label>
          <input type='email' placeholder='your email address' value={email} onChange={(event) => setEmail(event.target.value)} onBlur={handleEmailBlur} />
        </div>
        <div className='form-group'>
          <label>Message: </label>
          <textarea id='message' placeholder='write your message here.' value={message} onChange={(event) => setMessage(event.target.value)} rows='4'></textarea>
        </div>
        <div className={`error-message ${statusMessage === 'Info received!' ? 'success-message' : ''}`}>
          {statusMessage}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
