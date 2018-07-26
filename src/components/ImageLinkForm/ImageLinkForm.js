import React from 'react';
import './ImageLinkForm.css';


// Destructuring
const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
        {/*Need input and a detect button */}
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
        {/*w-70 = width is 70%, grow= it will grow when hovered over, ph= padding horizontal, dib+ display inline block*/}
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button
                        className='w-30 grow f4 link ph3 pv2 dib white bg-green'
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;
