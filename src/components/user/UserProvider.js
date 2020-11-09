// import React, { useState, createContext } from "react"

// export const UserContext = createContext()

// export const UserProvider = (props) => {
//     const [users, setUsers] = useState([])

//     const getUsers = () => {
//         return fetch("http://localhost:8088/users")
//             .then(res => res.json())
//             .then(setUsers)
//     }

//     const addUser = userObj => {
//         return fetch("http://localhost:8088/users", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(userObj)
//         })
//             .then(getUsers)
//     }

//     const getUserById = (id) => {
//         return fetch(`http://localhost:8088/users/${id}`)
//             .then(res => res.json())
//     }

//     const deleteUser = userId => {
//         return fetch(`http://localhost:8088/users/${id}`, {
//             method: "DELETE"
//         })
//             .then(getUsers)
//     }

//     const updateUser = user => {
//         return fetch(`http://localhost:8088/users/${id}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(user)
//         })
//             .then(getUsers)
//     }

//     return (
//         <UserContext.Provider value={{
//             users, getUsers, addUser, getUserById, deleteUser, updateUser
//         }}>
//             {props.children}
//         </UserContext.Provider>
//     )
// }