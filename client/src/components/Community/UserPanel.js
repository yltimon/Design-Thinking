import React from 'react';

const UserPanel = () => {
  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="bg-pink-600 w-10 h-10 rounded-full mr-3"></div>
        <span className="font-semibold">Username</span>
      </div>
      <button className="bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600">Join Channel</button>
    </div>
  );
};

export default UserPanel;
