import { useState } from "react";
export default function Login({ onLogin }) {
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");

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

        onLogin({ uname, pass });
        setUname("");
        setPass("");
    }
    return (
        <form onSubmit={submit} className="add-form">
            <div className="container col-md-5">
                <div className="mb-3">
                    <h2>Login</h2>
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

                    <button className='btn'>Login</button>
                </div>
            </div>
        </form>
    );
}