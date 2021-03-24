import React, { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "./usercontext"

function Users() {

    let users = useContext(UserContext);

    return (
        <div className="card-body">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Users</h1>
                <Link to="/create" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i>Create User</Link>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.userList.map((user, index) => {
                                // console.log(user);
                                return <tr>
                                    <td>
                                        <Link to="/profile">{user.userName}</Link></td>
                                    <td>{user.userEmail}</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>
                                        <Link to={`/update/${user.userName}+${user.userEmail}+${index}`} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                            className="fas fa-download fa-sm text-white-50"></i>Update User</Link>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Users;