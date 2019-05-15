import React from 'react';

const UserInput = (props) => {
    const style ={
        border: '3px solid gray',
    };
    return(
        <div className="UserInput">
             <input style={style} type="text" onChange={props.change} value={props.username} name={props.index}/>
        </div>
    )
}

export default UserInput;