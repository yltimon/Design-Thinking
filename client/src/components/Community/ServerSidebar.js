// src/components/ServerSidebar.jsx
import React from 'react';
import { serversData } from './serversData';

const ServerSidebar = ({ onSelectServer, selectedServer }) => {
  const servers = Object.keys(serversData);

  return (
    <div className="w-20 bg-pink-100 flex flex-col items-center py-4 mx-4">
      {servers.map((server, index) => (
        <div
          key={index}
          onClick={() => onSelectServer(server)}
          className={`bg-pink-600 w-20 h-12 rounded-lg p-2 mb-4 flex items-center justify-center cursor-pointer 
            ${selectedServer === server ? 'ring-4 ring-pink-400' : 'hover:bg-pink-700'}`}
          title={server}
        >
          {server}
        </div>
      ))}
    </div>
  );
};

export default ServerSidebar;
