import React from "react";
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
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
  
  return (
    <div className="col-12">
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit} className='col-12'>
        <label className="col-12">Name:
          <input 
          className="col-6"
          type='text' 
          placeholder='name'
          value={name}
          onChange={(e) => setName (e.target.value)}
          />
        </label>
        <label className="col-12">Email:
          <input 
          className="col-6"
          type='text' 
          placeholder='email'
          value={email}
          onChange={(e) => setEmail (e.target.value)}
          />
        </label>
        <label className="col-12">Message:
          <input 
          className="col-6"
          type='text' 
          value={message}
          onChange={(e) => setMessage (e.target.value)}
          />
        </label>
        <input type='submit'/>
      </form>
    </div>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Contact/>)