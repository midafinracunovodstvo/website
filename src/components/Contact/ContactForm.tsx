"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

interface FormState {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully sent and we will get back to you soon.",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Define the shape of the form state
interface ContactState {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

// Form initial state
const INITIAL_STATE: ContactState = {
  name: "",
  email: "",
  number: "",
  subject: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const [contact, setContact] = useState<ContactState>(INITIAL_STATE);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, message } = contact;
      const payload = { name, email, number, subject, message };
      const response = await axios.post(url, payload);
      console.log(response.data);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.error("Error submitting the contact form:", error);
    }
  };

  return (
    <>
      <div className="contact-form">
        <div className="contact-title">
          <h2>Budimo u kontaktu</h2>
          <p>
            Ako imate pitanja ili zelite da nam posaljete poruku, kontaktirajte
            nas putem ove forme. A mi ćemo da vas pozovemo u najkracem mogućem
            roku.
            Hvala
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="contact-form-box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Ime"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={contact.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      placeholder="Telefon"
                      className="form-control"
                      value={contact.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Naslov"
                      className="form-control"
                      value={contact.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      cols={30}
                      rows={6}
                      placeholder="Vaša poruka..."
                      className="form-control"
                      value={contact.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-sm-12">
                  <button type="submit" className="btn btn-primary">
                    Pošalji poruku
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
