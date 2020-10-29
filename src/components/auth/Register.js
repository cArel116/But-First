import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import "./Login.css"

export const Register = (props) => {
    const firstName = useRef()
    const lastName = useRef()
    const address = useRef()
    const email = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: `${firstName.current.value} ${lastName.current.value}`,
                            email: email.current.value,
                            address: address.current.value
                        })
                    })
                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("butFirst_user", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })

    }

    return (
        <div className="register--home">
            <div className="register--wrapper">
                <main style={{ textAlign: "center" }}>

                    <dialog className="dialog dialog--password" ref={conflictDialog}>
                        <div>Account with that email address already exists!</div>
                        <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
                    </dialog>

                    <form className="form--register" onSubmit={handleRegister}>
                        <h1 className="h3 mb-3 font-weight-normal registerHeader">But First... Register!</h1>
                        <fieldset>
                            <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                        </fieldset>
                        <fieldset>
                            <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                        </fieldset>
                        <fieldset>
                            <input ref={address} type="text" name="address" className="form-control" placeholder="Address" required />
                        </fieldset>
                        <fieldset>
                            <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                        </fieldset>
                        <div className="registerButtons">
                            <Button className="register--register" type="submit" size="sm" variant="outline-primary" block> Register </Button>
                            <Button className="register--cancel" size="sm" variant="outline-primary" block onClick={e => history.push("/Login")}> Cancel </Button>
                        </div>
                    </form>
                </main >
            </div>
        </div>
    )
}

