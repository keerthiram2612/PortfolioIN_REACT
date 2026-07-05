import "./Formstyle.css"
import React from 'react'

export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="form-container">
      <form className="glass-card" onSubmit={handleSubmit}>
        <h2>Send a Message</h2>
        <div className="input-group">
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" placeholder="Enter your name" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" placeholder="Enter your email" required />
        </div>
        <div className="input-group">
          <label htmlFor="subject">Subject</label>
          <input id="subject" type="text" placeholder="What is this about?" required />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="6" placeholder="Type your message here..." required />
        </div>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  )
}

