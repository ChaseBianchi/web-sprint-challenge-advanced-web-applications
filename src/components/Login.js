import React, { useState, useEffect } from "react";
import axios from "axios";
import {urlBase} from '../mocks/handlers'
import {useHistory} from 'react-router-dom'

const Login = () => {
  const [form, setForm] = useState({username: '', password: ''})
  const [error, setError] = useState('')
  const {push} = useHistory()
  useEffect(() => {
    
  },[])

  const login = (e) => {
    e.preventDefault();
    axios
      .post(`${urlBase}/login`, form)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        push("/bubblepage");
      })
      .catch((err) => setError(err.response.data.error));
  };

  const changeHandler = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <>
    <div style={{width: '100%', display: 'flex', flexFlow: 'column nowrap', alignItems: 'center'}}>
    <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <input
        name='username'
        onChange={changeHandler}
        value={form.username}
        placeholder='username'
        />
        <input
        name='password'
        onChange={changeHandler}
        value={form.password}
        placeholder='password'
        />
        <button>Login</button>
        <div style={{color: 'red'}}>{error.error}</div>
      </form>
      </div>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.

// useEffect(()=>{
//   axios
//     .delete(`http://localhost:5000/api/colors/1`, {
//       headers:{
//         'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
//       }
//     })
//     .then(res=>{
//       axios.get(`http://localhost:5000/api/colors`, {
//         headers:{
//           'authorization': ""
//         }
//       })
//       .then(res=> {
//         console.log(res);
//       });
//       console.log(res);
//     })
// });