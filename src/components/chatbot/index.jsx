import React, { useEffect, useState } from "react";
import "./bot.css";

const initialMessages = [
  {
    id: 1,
    text: "Bonjour, comment puis-je vous aider aujourd'hui ?",
    sender: "bot",
  },
  {
    id: 2,
    text: "J'ai une question sur mes droits en tant que locataire.",
    sender: "user",
  },
  {
    id: 3,
    text: "Bien sûr, je peux vous aider avec cela. Quelle est votre question spécifique ?",
    sender: "bot",
  },
  {
    id: 4,
    text: "Est-ce que mon propriétaire peut augmenter le loyer quand il veut ?",
    sender: "user",
  },
  {
    id: 5,
    text: "Non, le propriétaire doit respecter certaines règles pour augmenter le loyer. Souhaitez-vous en savoir plus sur ces règles ?",
    sender: "bot",
  },
  { id: 6, text: "Oui, s'il vous plaît.", sender: "user" },
  {
    id: 7,
    text: "D'accord. Les augmentations de loyer sont soumises à la réglementation locale et doivent souvent être justifiées. Je vous recommande de consulter la législation spécifique de votre région.",
    sender: "bot",
  },
  {},
];

export const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [reload, setReload] = useState([]);
  useEffect(() => {
    // Pour éviter que les messages s'affichent deux fois, on s'assure que le useEffect s'exécute une seule fois
    const timeouts = initialMessages.map((message, index) =>
      setTimeout(() => {
        setMessages((msgs) => [...msgs, message]);
        if (index === initialMessages.length - 1) {
          setReload((reload) => !reload);
          setMessages([]);
        }
      }, 1000 * index)
    );

    // Nettoyer les timeouts lors du démontage du composant
    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, [reload]);

  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (!userInput.trim()) return;

    const newMessage = { id: Date.now(), text: userInput, sender: "user" };
    setMessages((currentMessages) => [...currentMessages, newMessage]);
    setUserInput("");

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "C'était un exemple de conversation. N'hésitez pas à poser vos propres questions !",
        sender: "bot",
      };
      setMessages((currentMessages) => [...currentMessages, botResponse]);
    }, 1000);
  };

  return (
    <div className="chatbot">
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender} animate-message`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Posez votre question ici..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleSend}>Envoyer</button>
      </div>
    </div>
  );
};

// export  Chatbot;
