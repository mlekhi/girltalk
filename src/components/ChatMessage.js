import React from "react";
import "./ChatMessage.css";

const ChatMessage = ({ sender, text }) => (
  <div className={`chat-message ${sender === "You" ? "user" : "ai"}`}>
    <strong>{sender}:</strong> {text}
  </div>
);

export default ChatMessage;
