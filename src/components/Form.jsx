import "./FormStyles.css";
import  { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


import React from 'react'

const Form = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;
  
      setForm({
        ...form,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs
        .send('service_qzg5xau',
         'template_oiyetpn',
          
          {
            from_name: form.name,
            to_name: "Balveer Singh",
            from_email: form.email,
            to_email: "balveersingh55626@gmail.com",
            message: form.message,
          },
          'jeCPB8cKFJudSb25o'
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
  
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
  
            alert("Ahh, something went wrong. Please try again.");
          }
        );
    };
  
    return (
      <div className="form">
          <form
            ref={formRef}
            onSubmit={handleSubmit}>

            <label>Your Name</label>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                />
            
            <label > Email </label>
               <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                
              />
            
            <label>Your Message</label>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                
              />
  
            <button className="btn" type='submit'>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        
      </div>
    );
  };
  
 


  
//   return (
//     <div className="form">
//     <form>
//         <label>Your Name</label>
//         <input type="text"></input>
//         <label>Email</label>
//         <input type="email"></input>
//         <label>Subject</label>
//         <input type="text"></input>
//         <label>Message</label>
//         <textarea rows = "6" placeholder="Type your message here"/>
//         <button className="btn">Submit</button>
//     </form>
      
//     </div>
//   )
// }

export default Form;
