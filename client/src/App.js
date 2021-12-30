import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Registration from './Components/Registration';
import Login from './Components/Login';
import Search from './Components/Search';
import Update from './Components/Update';
import "./bootstrap.min.css";
import UserList from './Components/UsersList';

function App() {
  const [userList, setUserList] = useState([]);
  const [regi, setRegi] = useState(false);
  const [login, setLogin] = useState(false);
  const [search, setSearch] = useState(false);
  const [edit, setEdit] = useState(false);
  const [del, setDel] = useState(false);
  const [editdata, setEditdata] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("/api/list");
    setUserList(res.data.data);
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  const user = {
    username: "",
    password: "",
    name: "",
    age: 0
  }

  const userlogin = (u) => {
    console.log(u);
    axios.post("/api/login", u).then((res) => console.log(res.data));
  }

  const register = (u) => {
    user.username = u.uname;
    user.password = u.pass;
    user.name = u.name;
    user.age = u.age;
    //console.log(user);
    axios.post("/api/registration", user).then((res) => console.log(res.data));
    fetchUsers();
  }

  const userSearch = (u) => {
    console.log(u);
    axios.post("/api/search", u).then((res) => console.log(res.data));
  }

  const userSearchGET = (u) => {
    console.log(u);
    axios.get(`/api/searchGET/${u.name}`).then((res) => console.log(res.data));
  }

  const UserDeleteHandler = (id) => {
    axios.delete(`/api/delete/${id}`).then((res) => console.log(res.data));
    fetchUsers();
    console.log("App Delete: " + id);
  };

  const UserUpdateHandler = (data) => {
    //console.log("APPID: ",data.id);
    setEditdata(data);
    setEdit(true);
    //axios.Update();
  }

  const onChangeHandler = (data) => {
    //console.log("Updated: "+data.id);
    axios.put('/api/update', data).then((res) => console.log(res.data));
    fetchUsers();
  }

  return (
    <div className="App">
      <div className='container'>
        <button className='btn' onClick={fetchUsers}>Fetch Users</button>
        <button className='btn' onClick={() => setRegi(!regi)}>Registration</button>
        <button className='btn' onClick={() => setLogin(!login)}>Login</button>
        <button className='btn' onClick={() => setSearch(!search)}>Search</button>
        <button className='btn' onClick={() => setEdit(!edit)}>Update</button>
        <button className='btn' onClick={() => setDel(!del)}>Delete</button>
        {regi && <Registration onSave={register} />}
        {login && <Login onLogin={userlogin} />}
        {search && <Search onSearch={userSearch} btnName="Search" />}
        {search && <Search onSearch={userSearchGET} btnName="SearchGET" />}
        {edit && <Update oldData={editdata} onChange={onChangeHandler} />}
        <br />
        <UserList users={userList} OnDelete={UserDeleteHandler} onEdit={UserUpdateHandler} ></UserList>

        {/* <div className="row">
          {userList.map((user) => {
            return <User key={user._id} id={user._id} username={user.username} name={user.name} age={user.age} ></User>
          })}
        </div> */}
      </div>
    </div>
  );
}

export default App;
