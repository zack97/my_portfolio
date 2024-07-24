import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_oaq5fhn", // Replace with your EmailJS service ID
        "template_abcb0dc", // Replace with your EmailJS template ID
        templateParams,
        "b4j_WJ11JcUJkySWD" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert(t("contact.success"));
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (err) => {
          console.log("FAILED...", err);
          alert(t("contact.failure"));
        }
      );
  };

  return (
    <>
      <Header />

      <div className="content">
        <h1 className="page-title">{t("contactForm.title")}</h1>
        <div className="container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t("contactForm.name")}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t("contactForm.email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t("contactForm.subject")}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t("contactForm.message")}</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">{t("contactForm.send")}</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
