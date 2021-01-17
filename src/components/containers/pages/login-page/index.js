import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import axios from "axios"

export default function LoginPage() {
    const history = useHistory()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const formObj = { email: setEmail, password: setPassword }
    const handleForm = (e) => {
        const setterFunction = formObj[e.target.name];
        if (typeof setterFunction !== 'function') return;
        setterFunction(e.target.value)
    }

    const handleSubmit = async () => {
        try {
            console.log({ userName: email, password })
            const { data } = await axios.post("http://localhost:5000/auth/login",
                { userName: email, password: Number(password) })
            const { token } = data;
            if (token) {
                localStorage.setItem("token", token)
                history.push(`/home2`)
            } else {
                throw new Error(data)
            }
        } catch (ex) {
            alert(ex.message)
        }
    }



    return <div className="container">
        <h1> Login </h1>
        <div className="row">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" onChange={handleForm} type="text" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onChange={handleForm} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit} type="button">
                    Submit
  </Button>
            </Form>
        </div>
    </div>
}

