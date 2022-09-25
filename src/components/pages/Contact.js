import React from "react";
import '../styles/index.css'
// import ReactDOM from 'react-dom/client'

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    if(name && message && email) {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    } else {
      alert('Please fill out all information before submitting')
    }
  }
  
  return (
  <div className="container py-4">

    <form id="contactForm" onSubmit={handleSubmit}>

      {/* <!-- Name input --> */}
      <div className="mb-3">
        <label className="form-label" for="name">Name</label>
        <input 
          className="form-control" 
          id="name" 
          type="text" 
          placeholder="Name" 
          value={name}
          onChange={(e) => setName (e.target.value)}
        />
      </div>

      {/* <!-- Email address input --> */}
      <div className="mb-3">
        <label className="form-label" for="emailAddress">Email Address</label>
        <input 
          className="form-control" 
          id="emailAddress" 
          type="email" 
          placeholder="Email Address" 
          value={email}
          onChange={(e) => setEmail (e.target.value)}
        />
      </div>

      {/* <!-- Message input --> */}
      <div className="mb-3">
        <label className="form-label" for="message">Message</label>
        <textarea className="form-control" 
          id="message" 
          type="text" 
          placeholder="Message" 
          style={{height: '10rem'}}
          value={message}
          onChange={(e) => setMessage (e.target.value)}
        ></textarea>
      </div>

      {/* <!-- Form submit button --> */}
      <div className="d-grid">
        <button className="btn btn-primary btn-lg" type="submit">Submit</button>
      </div>

    </form>

  </div>
  );
}
