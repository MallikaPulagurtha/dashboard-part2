import React, { useContext, useState } from "react";
import UserContext from "./usercontext"

function Update(props) {
    const users = useContext(UserContext);
    console.log(props);

    let [matchName, matchEmail, matchIndex] = props.match.params.id.split("+");
    console.log(props.match.params.id.split("+"));

    let [userName, setUserName] = useState(matchName);
    let [userEmail, setUserEmail] = useState(matchEmail);

    let userData = { userName, userEmail };


    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                users.userList.splice(matchIndex, 1, userData);
                users.setUserList([...users.userList]);

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

                            <button className="btn btn-primary" >Update User</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Update;