import React, { useState } from 'react';
import ServerSidebar from './Community/ServerSidebar';
import ChannelList from './Community/ChannelList';
import ChatArea from './Community/ChatArea';
import UserPanel from './Community/UserPanel';
import { serversData } from './Community/serversData';

const CommunityPage = () => {
    const [selectedServer, setSelectedServer] = useState('BC Support');
    const [channels, setChannels] = useState(serversData[selectedServer]);
  
    // Update channels when a server is selected
    const handleServerChange = (serverName) => {
      setSelectedServer(serverName);
      setChannels(serversData[serverName]);
    };
  
    return (
        <div className='bg-pink-100'>
        <div className="flex container min-h-screen mx-auto  text-white">

            <ServerSidebar onSelectServer={handleServerChange} selectedServer={selectedServer} />
            <ChannelList channels={channels} />
            <div className="flex flex-col flex-1">
                <ChatArea />
            </div>
        </div>
      </div>
    );
  };
  
  export default CommunityPage;