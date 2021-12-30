import React from "react";
import User from "./User";

const UserList = (props) => {
    const EditHandler = (data) => {
        props.onEdit(data);
        //console.log("ListEdit: " + data);
    };

    const DeleteHandler = (id) => {
        props.OnDelete(id);
    };

    return (
        <div className="row">
            {props.users.map((user) => {
                return <User key={user._id}
                    id={user._id}
                    username={user.username}
                    name={user.name}
                    age={user.age}
                    OnEdit={EditHandler}
                    OnDelete={DeleteHandler} ></User>
            })}
        </div>
    );
};

export default UserList;