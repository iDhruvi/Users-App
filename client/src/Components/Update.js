import { useState } from "react";

export default function Update(props){
    const [editdata, setEditdata] = useState({
        id: props.oldData.id,
        username: props.oldData.username,
        name: props.oldData.name,
        age: props.oldData.age
    });
    //console.log(props.oldData);

    const usernameHandler = (e) =>{
        setEditdata((prevData) => {
            return{
                ...prevData,
                username : e.target.value
            }
        })
    }

    const nameHandler = (e) =>{
        setEditdata((prevData) => {
            return{
                ...prevData,
                name : e.target.value
            }
        })
    }

    const ageHandler = (e) =>{
        setEditdata((prevData) => {
            return{
                ...prevData,
                age : e.target.value
            }
        })
    }

    const submit= (e) =>{
        e.preventDefault();
        props.onChange(editdata);
        setEditdata({
            username: "",
            name: "",
            age: ""
        })
    }

    return (
        <form className="add-form" onSubmit={submit}>
            <div className="container col-md-5">
                <div className="mb-3">
                    <h2>Update User</h2>
                    <br/>
                    <label>Username</label>
                    <input
                        className="form-control"
                        value={editdata.username}
                        placeholder="Username"
                        onChange={usernameHandler} />
                    <label>Name</label>
                    <input
                        value={editdata.name}
                        className="form-control"
                        placeholder="Name"
                        onChange={nameHandler} />
                    <label>Age</label>
                    <input
                        value={editdata.age}
                        className="form-control"
                        type="number"
                        placeholder="Age"
                        onChange={ageHandler} />
                    <button className='btn btn-dark'>Update</button>
                </div>
            </div>
        </form>
    );
};