import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {
  const {url,setToken} = useContext(StoreContext)
    const [currState,setCurrState] = useState("Sign Up")
    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler = (event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    const onLogin = async(event) =>{
        event.preventDefault()
        let newUrl =url;
        if(currState ==="Login"){
          newUrl += "api/user/login"
        }
        else{
          newUrl += "/api/user/register"
        }

        const res = await axios.post(newUrl,data);
        if(res.data.success){
            setToken(res.data.token);
            localStorage.setItem("token",res.data.token);
            setShowLogin(false)
        }
        else{
          alert(res.data.message);
        }
    }
  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className="login-popup-title">
            <h2>Sign up</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className='login-popup-inputs'>
            {currState==="Login"?<></>:<input name='name' onClick={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
            
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
        </div>
        <button type='submit'>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>I Agree to all T&C</p>
        </div>
        {currState==="Login"
        ?<p>Create a new acoount?<span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
        :<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login Here</span></p>
        }
        
      </form>
    </div>
  )
}

export default LoginPopup
