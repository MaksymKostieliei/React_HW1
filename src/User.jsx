import React from "react";

const User = ({ user, handleShowModal }) => {
    return (
        <div className="user" onClick={handleShowModal}>
            <img src={user.picture} alt="" />
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Balance: {user.balance}</p>
        </div>
    )
}

export default User;