import React, { useState } from "react";
import api from "../../services/api";
import Cimg from "../images/contact.png"
import "./style.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await api.post("/contact", formData);
          alert("Message sent successfully!");
        } catch (error) {
          alert("Failed to send message. Please try again later.");
        }
      };


    return (
        <div className="contact">
         
            <div className="contact-conteiner">
            
                <form className="form-contact" onSubmit={handleSubmit}>
                <h1 > Get in touch! </h1>
            <p> Want to get in touch ?
                We'd love to hear from you.</p><br />
                    <div className="row">
                        <spam> Name: </spam>
                        <input type="text" name="name" className="conta-input" required value={formData.name} onChange={handleChange}/>
                    </div>

                    <div className="row">
                        <spam> Email: </spam>
                        <input type="text" name="email" className="conta-input" required value={formData.email} onChange={handleChange} />
                    </div>


                    <div className="row">
                        <spam> Message: </spam>
                        <textarea type="text" name="message" className="conta-input" maxLength="200" required value={formData.message}  onChange={handleChange}
 />
                    </div>

                    <button type="submit">Send</button>

                </form>
                <div>
                    <img src={Cimg} alt="contact pic" />
                </div>
            </div>
        </div>

    );

}

export default Contact;