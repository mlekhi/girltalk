import React, { useState } from "react";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import { getAIResponse } from "../api/openai";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    const userMessage = { sender: "You", text: message };
    setMessages((prev) => [...prev, userMessage]);

    const aiResponse = await getAIResponse(message);
    const aiMessage = { sender: "AI Bestie", text: aiResponse };
    setMessages((prev) => [...prev, aiMessage]);
  };

  return (
    <div className="chat-page">
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

export default ChatPage;
