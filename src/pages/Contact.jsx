import './Contact.css'

function Contact() {
  return (
    <div className="contact-container">
      <h2 className='contact-title'>Contact Us</h2>
      <form>
        <div className="input-name">
          <input type="text" placeholder='Name'  required/>
          <input type="text" placeholder='Last Name' required/>
        </div>
        <input type="email" placeholder='Email' required/>
        <div className="input-submit">
          <input type="tel" placeholder='Phone' maxLength={11} required/>
          <button type='submit'>Submit</button>
        </div>
      </form>

    </div>
  )
}

export default Contact