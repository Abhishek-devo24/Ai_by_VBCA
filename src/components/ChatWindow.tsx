import React from 'react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="flex-grow bg-white border border-gray-300 rounded-md p-4 overflow-y-auto">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-4 ${
            message.sender === 'user' ? 'text-right' : 'text-left'
          }`}
        >
          <span
            className={`inline-block p-2 rounded-lg ${
              message.sender === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {message.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;