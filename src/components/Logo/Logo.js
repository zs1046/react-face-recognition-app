import React from 'react';
// import tilt for the logo to tilt when hovered over
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
    return(
        /*Tachyons: margin 4, margin top 0, br2= border radius 2, shadow-2= shadow like feature */
        <div className='ma4 mt0'>
        {/* Tilt component copy and pasted from the npm site, replaced default image with our logo*/}
            <Tilt className="Tilt br2 shadow-2" options={{ max : 75 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;
