import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import logo from "./logo.png"
import "./Login.css"


export const Login = props => {
    const email = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("butFirst_user", exists.id)
                    history.push("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <div className="loginHome">
            <main className="container--login">
                <dialog className="dialog dialog--auth" ref={existDialog}>
                    <div>User does not exist!</div>
                    <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
                </dialog>

                <section className="logo--img">
                    <img src={logo} alt="But First... Logo" />
                </section>
                <section className="login">
                    <form className="form--login" onSubmit={handleLogin}>
                        <fieldset>
                            <input ref={email} type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email Address"
                                required autoFocus />
                        </fieldset>
                        <section className="link--register">
                            <Link to="/register">Not registered yet?</Link>
                        </section>
                        <fieldset>
                            <button type="submit">
                                Sign In
                        </button>
                        </fieldset>
                    </form>
                </section>

            </main>
        </div>
    )
}

