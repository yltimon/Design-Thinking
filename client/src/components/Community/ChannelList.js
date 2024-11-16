import React, { useState } from 'react';

const ChannelList = ({ channels = [] }) => {
  const [selectedChannel, setSelectedChannel] = useState('#general');

  return (
    <div className="w-60 bg-pink-100 p-4">
      <h2 className="text-xl font-semibold mb-4 text-pink-600">Channels</h2>
      <ul>
        {channels.map((channel, index) => (
          <li
            key={index}
            onClick={() => setSelectedChannel(channel)}
            className={`py-2 px-3 rounded-lg cursor-pointer  text-gray-700
              ${selectedChannel === channel ? 'bg-white' : 'hover:bg-white'}`}
          >
            {channel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelList;
