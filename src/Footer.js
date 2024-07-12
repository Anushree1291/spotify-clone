import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';


function Footer() {
    return (
        <div className='footer'>
            <div className='footer_left' >

            </div>

            <div className='footer_center'>
                <ShuffleIcon className='footer_green'/>
                <SkipPreviousIcon className='footer_icon'/>
                <PlayCircleOutlineIcon className='' fontSize='large'/>
                <SkipNextIcon className='footer_icon'/>
                <ReplayIcon className='footer_green'/>

            </div>
            <div className='footer_right'>
                

            </div>
        
        </div>
    );
}

export default Footer;