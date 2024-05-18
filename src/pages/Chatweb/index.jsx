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

    // Add user message to the state
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", parts: [{ text: newMessage }] },
    ]);
    setUserInput("");
    setShowSuggestions(false);

    // Send message to the model
    try {
      const res = await mutate({
        input: newMessage,
      });

      console.log("Response from mutate:", res); // Log the full response

      // Check if response data is present
      console.log("Response data:", res?.candidates?.[0]?.content?.parts);
      const responseText =
        res.data?.response?.candidates[0]?.content?.parts[0]?.text;

      // Log the extracted text

      if (responseText) {
        // Add model response to the state
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: "model",
            parts: [{ text: responseText }],
          },
        ]);
      } else {
        console.error("No response text found in the response", res);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: "model",
            parts: [{ text: "No response text" }],
          },
        ]);
      }
    } catch (error) {
      console.error("Error sending message to the model:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "model",
          parts: [{ text: "An error occurred while processing your request." }],
        },
      ]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  return (
    <>
      <div className="chatweb-container">
        <div className="chatweb-body">
          {messages.map(
            (msg, index) =>
              msg &&
              msg.role &&
              msg.parts && (
                <div key={index} className={`chatweb-message ${msg.role}`}>
                  {msg.parts[0]?.text}
                </div>
              )
          )}

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
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button onClick={() => handleSendMessage()}>Envoyer</button>
        </div>
      </div>
    </>
  );
};

export default ChatWeb;

// import React, { useState } from "react";
// import "./index.css";
// import { useAiMutation } from "../../app/Slices/apislice";

// const ChatWeb = () => {
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(true);

//   const [mutate] = useAiMutation();

//   const suggestions = [
//     "Quels sont mes droits en tant que locataire ?",
//     "Comment créer une entreprise ?",
//     "Quelles sont les étapes pour déposer un brevet ?",
//   ];

//   const handleSendMessage = async (text) => {
//     if (!text && userInput.trim() === "") return;
//     const newMessage = text || userInput;

//     // Add user message to the state
//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { role: "user", parts: [{ text: newMessage }] },
//     ]);
//     setUserInput("");
//     setShowSuggestions(false);

//     // Send message to the model
//     try {
//       const res = await mutate({
//         input: [{ role: "user", parts: [{ text: newMessage }] }],
//       });

//       // Add model response to the state
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         {
//           role: "model",
//           parts: [
//             {
//               text: res.data?.response?.candidates[0]?.content?.parts[0]?.text,
//             },
//           ],
//         },
//       ]);
//     } catch (error) {
//       console.error("Error sending message to the model:", error);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     handleSendMessage(suggestion);
//   };

//   return (
//     <>
//       <div className="chatweb-container">
//         <div className="chatweb-body">
//           {messages.map(
//             (msg, index) =>
//               msg &&
//               msg.role &&
//               msg.parts && (
//                 <div key={index} className={`chatweb-message ${msg.role}`}>
//                   {msg.parts[0]?.text}
//                 </div>
//               )
//           )}

//           {showSuggestions && (
//             <div className="chatweb-suggestions">
//               {suggestions.map((suggestion, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleSuggestionClick(suggestion)}
//                   className="suggestion-button"
//                 >
//                   {suggestion}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//         <div className="chatweb-input">
//           <input
//             type="text"
//             value={userInput}
//             onChange={(e) => setUserInput(e.target.value)}
//             placeholder="Posez votre question ici..."
//             onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//           />
//           <button onClick={() => handleSendMessage()}>Envoyer</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ChatWeb;
