import React from "react";

const User = (props) => {

    const EditHandler = () => {
        var data = {
            id: props.id,
            username: props.username,
            name: props.name,
            age: props.age
        }
        //console.log(data);
        props.OnEdit(data);
    };

    const DeleteHandler = () => {
        props.OnDelete(props.id);
    };

    return (
        <div className="card col-md-5 m-2">
            <div className="card-header">
                <h3>{props.username}</h3>
            </div>
            <div className="card-body">
                <h4>{props.name}</h4>
                <h4>{props.age}</h4>
                <div className="btn-group">
                    <button className="btn btn-sm btn-primary" onClick={EditHandler}>Edit</button>
                    <button className="btn btn-sm btn-danger" onClick={DeleteHandler}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default User;