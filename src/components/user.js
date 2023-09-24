import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function User() {
    const [name,setName] = useState("John Doe");

    const changeName = () => {
        if (name === "John Doe") setName("Arvind B S");
        else setName("John Doe");
    }

    const onchangeHandler = (e) => {
        setName(e.target.value);
    }
    return ( <div>
        <h2>Welcome {name}</h2>
        <input type="text" onChange={onchangeHandler} />
        <Button variant="info" onClick={changeName}>Change Name</Button>
    </div> );
}

export default User;