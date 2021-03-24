import React, { useContext, useState } from "react";
import UserContext from "./usercontext"

function Create() {
    let users = useContext(UserContext);

    let [userName, setUserName] = useState("");
    let [userEmail, setUserEmail] = useState("");
    let userData = { userName, userEmail };

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                users.setUserList([...users.userList, userData]);
                setUserName("");
                setUserEmail("");
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <label>UserName</label>
                            <input className="form-control" type="text" value={userName} onChange={(e) => {
                                setUserName(e.target.value);
                            }} />
                        </div>
                        <div className="col-lg-6">
                            <label>Email ID</label>
                            <input className="form-control" type="text" value={userEmail} onChange={(e) => {
                                setUserEmail(e.target.value);
                            }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">

                            <button className="btn btn-primary" >Add User</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Create;