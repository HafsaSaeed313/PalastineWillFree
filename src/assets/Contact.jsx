import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form{
       max-width: 50rem;
       margin: auto;
      

      .contact-inputs{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        
        
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          border-radius: 10px;
          background: #d2f4cb;

          &:hover{
             color: green;
          }
        }
      }
    }
  }
  
  `;
  return <Wrapper>
       <h2>Join Us</h2>
       <h3 style={{ textAlign: 'center', margin: '20px' }}>Help free Palestine</h3>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13637.005394190905!2d34.233182238475976!3d31.296797424529778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd938fd9cce82b%3A0xf8056862904cb47f!2sRafah!5e0!3m2!1sen!2s!4v1710017970023!5m2!1sen!2s"
        width="100%" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  
  <div className='container'>
    <div className='contact-form'>
      <form action='https://formspree.io/f/myyrppwk' method="POST" className='contact-inputs'>
        <input type='text' name='username'
         placeholder='Please Enter Your Name'
          autoComplete='off'
          required/>

<input type='email' name='Email'
         placeholder='Please Enter Your Email'
          autoComplete='off'
          required/>

          <textarea name='message' cols="30" rows="6" autoComplete='off' required></textarea>
          <input type='submit' />

</form>
    </div>

  </div>
  </Wrapper>
}

export default Contact