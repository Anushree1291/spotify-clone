import React, { useState } from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{ playlists, followedartists }] = useDataLayerValue();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className='sidebar_upper'>
        <SidebarOption Icon={HomeRoundedIcon} title={!isCollapsed && "Home"} />
        <SidebarOption Icon={SearchIcon} title={!isCollapsed && "Search"} />
      </div>
      <div className='sidebar_library' onClick={toggleSidebar}>
        <SidebarOption Icon={LibraryMusicIcon} title={!isCollapsed && "Your Library"} />
      </div>
      <div className='sidebar_lower'>
        {playlists?.items?.map((playlist) => (
          <SidebarOption 
            key={playlist.id}
            title={!isCollapsed && playlist.name} 
            owner={!isCollapsed && playlist.owner.display_name}
            Icon={playlist.images?.length > 0 ? playlist.images[0].url : null}
          />
        ))}
        {followedartists?.artists?.items?.map((followedartist) => (
          <SidebarOption 
            key={followedartist.id}
            title={!isCollapsed && followedartist.name} 
            owner={!isCollapsed && followedartist.owner?.display_name || 'Unknown'}
            Icon={followedartist.images?.length > 0 ? followedartist.images[0].url : null}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
