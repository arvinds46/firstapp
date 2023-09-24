import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function LoginForm() {
    const [formData, setFormData] = useState({email:"",message:""});
    return (<>
    <h3>Email: {formData.email}</h3>
    <h4>Address: {formData.message}</h4>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"
        onChange={(e) => {setFormData({...formData, email:e.target.value})}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} 
        onChange={(e) => {setFormData({...formData, message:e.target.value})}} />
      </Form.Group>
    </Form>
    </>  );
}

export default LoginForm;