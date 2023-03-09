import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormComponent = ({ handleUserData, buttonName }: any) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('')


    const handleFormdata = (event: any) => {
        event?.preventDefault()
        if (email && password) {
            handleUserData({ email, password })
        }
    }

    return (
        <Form className='text-start' onSubmit={handleFormdata}>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <input
                    className='form-control'
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <input
                    className='form-control'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                {buttonName}
            </Button>
        </Form>
    )
}

export default FormComponent