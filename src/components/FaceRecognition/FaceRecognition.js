import React from 'react';

//simple component with no state, a pure function
const FaceRecognition = ({imageUrl}) => {
    return (
        <div className='center ma'>
            <div className='mt2'>
                <img alt='' src={imageUrl} width='500px' height='auto'/>
            </div>
        </div>
    )
}

export default FaceRecognition;