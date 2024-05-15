import React, { useState } from "react";
import "./index.css";
import { useAiMutation } from "../../app/Slices/apislice";

const ChatWeb = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);

  const [mutate] = useAiMutation();

  const suggestions = [
    "Quels sont mes droits en tant que locataire ?",
    "Comment créer une entreprise ?",
    "Quelles sont les étapes pour déposer un brevet ?",
  ];

  const handleSendMessage = async (text) => {
    if (!text && userInput.trim() === "") return;
    const newMessage = text || userInput;

    setMessages([...messages, { role: "user", text: newMessage }]);
    setUserInput("");
    setShowSuggestions(false);
    console.log(messages, "this is message");
    const res = await mutate({
      input: messages,
    });
    console.log(res, "response");

    // setTimeout(() => {
    //   setMessages((m) => [...m, { role: "bot", text: data }]);
    //   console.log(Input);
    // }, 1000);
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  return (
    <>
      <div className="chatweb-container">
        <div className="chatweb-body">
          {messages.map((msg, index) => (
            <div key={index} className={`chatweb-message ${msg.role}`}>
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
    </>
  );
};

export default ChatWeb;
