import React, { useState } from "react";
import "./index.css";

const ChatWeb = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);

  const suggestions = [
    "Quels sont mes droits en tant que locataire ?",
    "Comment créer une entreprise ?",
    "Quelles sont les étapes pour déposer un brevet ?",
  ];

  const handleSendMessage = (text) => {
    if (!text && userInput.trim() === "") return;
    const newMessage = text || userInput;

    setMessages([...messages, { from: "user", text: newMessage }]);
    setUserInput("");
    setShowSuggestions(false); 

   
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { from: "bot", text: "Réponse simulée du chatbot à votre question." },
      ]);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  return (
    <div className="chatweb-container">
      <div className="chatweb-body">
        {messages.map((msg, index) => (
          <div key={index} className={`chatweb-message ${msg.from}`}>
            {msg.text}
          </div>
        ))}

        {showSuggestions && (
          <div className="chatweb-suggestions">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="suggestion-button"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="chatweb-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Posez votre question ici..."
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button onClick={() => handleSendMessage()}>Envoyer</button>
      </div>
    </div>
  );
};

export default ChatWeb;
