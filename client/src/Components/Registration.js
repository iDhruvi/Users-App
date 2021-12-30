import { useState } from "react";
export default function Registration({ onSave }) {
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const submit = (e) => {
        e.preventDefault();

        if (!uname) {
            alert("Enter Username!!");
            return;
        }
        if (!pass) {
            alert("Enter Password!!");
            return;
        }
        if (!name) {
            alert("Enter Name!!");
            return;
        }
        if (!age) {
            alert("Enter Age!!");
            return;
        }

        onSave({ uname, pass, name, age });
        setUname("");
        setPass("");
        setName("");
        setAge(0);
    }
    return (
        <form className="add-form" onSubmit={submit}>
            <div className="container col-md-5">
                <div className="mb-3">
                    <h2>Register User</h2>
                    <br/>
                    <label>Username</label>
                    <input
                        value={uname}
                        className="form-control"
                        placeholder="Username"
                        onChange={(e) => setUname(e.target.value)} />
                    <label>Password</label>
                    <input
                        value={pass}
                        className="form-control"
                        placeholder="Password"
                        onChange={(e) => setPass(e.target.value)} />
                    <label>Name</label>
                    <input
                        value={name}
                        className="form-control"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)} />
                    <label>Age</label>
                    <input
                        value={age}
                        className="form-control"
                        type="number"
                        placeholder="Age"
                        onChange={(e) => setAge(e.target.value)} />
                    <button className='btn btn-dark'>Register</button>
                </div>
            </div>
        </form>
    );
}