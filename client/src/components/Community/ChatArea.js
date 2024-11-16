// src/components/ChatArea.jsx
import React, { useState } from 'react';

const ChatArea = () => {
  const [messages, setMessages] = useState([
    { user: 'JaneDoe', text: 'Welcome to the support group!' },
    { user: 'HealthCoach', text: 'Remember to check out the resources in #resources.' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { user: 'You', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className=" flex flex-col p-4 min-h-screen">
      <div className="flex-1 overflow-y-auto mb-4 text-gray-700">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <span className="font-bold">{message.user}: </span>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          className="flex-1 p-2 rounded-lg bg-white text-gray-700 focus:outline-none"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-pink-600 px-4 py-2 rounded-lg hover:bg-pink-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatArea;
