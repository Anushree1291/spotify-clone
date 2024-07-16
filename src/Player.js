import React, { useState } from 'react';
import "./Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import DetailView from './DetailView'; // Import your new component

function Player({ spotify }) {
    const [selectedItem, setSelectedItem] = useState(null); // State to hold selected album or artist

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="player">
            {/* sidebar */}
            {/* body */}
            <div className='player_body'>
                <Sidebar/>
                <Body spotify={spotify} onItemClick={handleItemClick} /> {/* Pass onItemClick to Body */}
            </div>

            {/* footer */}
            <Footer/>
            
            {/* Render DetailView if an item is selected */}
            <DetailView item={selectedItem} />
        </div>
    );
}

export default Player;
