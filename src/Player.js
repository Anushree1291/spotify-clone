import React from 'react';
import "./Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function Player() {
    return (
        <div className="player">
            {/* sidebar */}
            {/* body */}
            <div className='player_body'>
                <Sidebar/>
                <Body/>
            </div>

            {/* footer */}
            <Footer/>
        </div>
    );
}

export default Player;