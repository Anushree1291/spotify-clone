import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_left' >
                <img  
                    className='footer_albumLogo'
                    src="https://images.mykhel.com/webp/ph-big/2024/03/cricketing-maestro-the-one-amp;-only-king-new-hairstyle-goes-viral_171084045430.jpg"
                    alt=""
                />
                <div className='footer_songInfo'>
                    <h4>Yeah</h4>
                    <p>Virat</p>
                </div>
            </div>

            <div className='footer_center'>
                <ShuffleIcon className='footer_green'/>
                <SkipPreviousIcon className='footer_icon'/>
                <PlayCircleOutlineIcon className='' fontSize='large'/>
                <SkipNextIcon className='footer_icon'/>
                <ReplayIcon className='footer_green'/>

            </div>

            <div className='footer_right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlayCircleOutlineIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby='continous-slider'/>
                    </Grid>

                </Grid>
                

            </div>
        
        </div>
    );
}

export default Footer;