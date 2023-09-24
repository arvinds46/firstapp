import React from 'react';
import Button from 'react-bootstrap/Button';

function Alert() {
    const changeName = () => {
        alert("React is Great UI Library!");
    }

    return (<Button variant="warning m-3" onClick={changeName}>Alert!</Button>);
}

export default Alert;