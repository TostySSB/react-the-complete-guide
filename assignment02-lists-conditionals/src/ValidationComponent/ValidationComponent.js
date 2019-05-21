import React from 'react';

const ValidationComponent = (props) => {
    if (props.inLength >= 5){
        return(
            <div className="ValidationComponent">
                <p>Text long enough</p>
            </div>
        )
    }
    return(
        <div className="ValidationComponent">
            Text too short
        </div>
    )
} 

export default ValidationComponent;