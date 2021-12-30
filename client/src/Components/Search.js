import { useState } from "react";
export default function Search({ onSearch, btnName }) {
    const [name, setName] = useState("");

    const submit = (e) => {
        e.preventDefault();

        if (!name) {
            alert("Please Enter Username");
            return;
        }

        onSearch({ name });
        setName("");
    }

    return (
        <form onSubmit={submit} className="add-form">
            <div className="container col-md-5">
                <div className="mb-3">
                    <h2>Search Other User</h2><br/>
                    <label>Username </label>
                    <input type="text" placeholder="Enter Username" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                    <button className='btn btn-dark'>{btnName}</button>
                </div>
            </div>
        </form>
    );
}