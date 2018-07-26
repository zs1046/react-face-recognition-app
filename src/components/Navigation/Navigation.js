import React from 'react';
//simple component with no state, pure component
const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            {/* move sign-in button to the right */}
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            {/*Tachyons stylings = fontsize, make it a link, dim when clicked on, make it black, underlined, padding of 3, and pointer when hovered over */}
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        );
    }
}

export default Navigation;
