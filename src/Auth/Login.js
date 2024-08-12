import React,{useContext} from 'react'
import { AuthContext } from './AuthContext'


const Login = () => {

    const{ user,login,logout}   =useContext(AuthContext)

  return (
    <div>Login

        <h1>Authentication</h1>
        {/* <h1>{user?.username}:NAME</h1> */}

        {user ? (
            <div><h1>Welcome user</h1> 
            <p>{user.username}</p>
            <button onClick={()=>logout()}>Logout</button>
            </div>
        ):
        // <button onClick={()=> login({username:'user123'})}>Login</button>
        <button onClick={()=> login({username:'user123'})}>Login</button>
        }
        
        
    </div>
  )
}

export default Login