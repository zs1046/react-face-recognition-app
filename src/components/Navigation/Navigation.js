import React from 'react';

//simple component with no state, a pure function, it wont accept any parameters for now
const Navigation = () => {
    return (
        <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
            {/*Tachyons = F3 size, it will be a link, dim when i click on it,
            going to be black, underlined, padding of 3, pointer when we hover  */}
            <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    )
}

export default Navigation;