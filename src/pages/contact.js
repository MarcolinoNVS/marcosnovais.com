import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Definir os parâmetros para o template do EmailJS
    const templateParams = {
      to_name: "Admin", // Nome de quem vai receber o e-mail
      from_name: name, // Nome do remetente (usuário)
      from_email: email, // E-mail do remetente
      message: message, // Mensagem do formulário
    };

    // Enviar o e-mail com o EmailJS
    emailjs
      .send(
        "service_mhvn86m",
        "template_sp7w2wu",
        templateParams,
        "X_P2uqsxJ29Uc4_KN"
      )
      .then(
        (response) => {
          alert("Mensagem enviada com sucesso!");
          // Limpar os campos após o envio
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Erro ao enviar o e-mail: ", error.text);
          alert("Erro ao enviar a mensagem: " + error.text);
        }
      );
  };

  return (
    <div className="poppins-thin">
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Mensagem:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
