import React from 'react';
import './SidebarOption.css';

function SidebarOption({ title, owner, Icon }) {
  return (
    <div className='sidebarOption'>
      <div className='sidebar_container'>
        {Icon ? (
          typeof Icon === 'string' ? (
            <img
              className='sidebar_container_albumLogo'
              src={Icon}
              alt={title}
            />
          ) : (
            <Icon className="sidebarOption_icon" />
          )
        ) : (
          <div className='sidebar_container_albumLogo_placeholder'></div>
        )}
        {!title && <div className="sidebarOption_placeholder"></div>}
        {title && (
          <div className='sidebar_container_songInfo'>
            <h4>{title}</h4>
            {owner && <p>{owner}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default SidebarOption;
