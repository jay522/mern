import React,{useState,useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import loginimg from '../img/login.jpg';
import Account from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import { userContext } from '../App';

const Login = () => {
    const {dispatch} = useContext(userContext);
    const history=useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const LoginUser=async(e)=>{
        e.preventDefault();
        const res=await fetch('/signin',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        })
        const data=res.json();
        if(res.status===400|| !data){
            window.alert("Invalid Credentials");
        }else{
            dispatch({type:"USER",payload:true})
            window.alert("Login Successfully");
            history.push("/")
        }
    }
    return (
        <>
             <section className="signup">
                <div className="container mt-3">
                <div className="row signup-content">
                <div className="signup-image col-md-6 d-flex justify-content-center align-items-center flex-column mt-1">
                <h2 className="form-title mb-5">Sign In</h2>
                        <figure>
                            <img src={loginimg} alt="signup" />
                        </figure>
                        <NavLink to="/signup" className="signup-image-link">Create a new Account.</NavLink>
                </div>
                <div className="signup-form col-md-6 d-flex justify-content-center align-items-center flex-column mt-1">
                    <form className="register-form" id="register-form" method="POST">
                        <div className="form-group">
                            <lable htmlFor="name"> <Account /> </lable>
                            <input type="text" name="name" id="name" autoComplete="off"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <lable htmlFor="password"> <LockIcon /> </lable>
                            <input type="password" name="password" id="password" autoComplete="off"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Your Password" />
                        </div>
                        <div className="form-group form-button">
                            <input type="submit" name="login" value="Login" onClick={LoginUser} />
                        </div>
                        </form>
                    </div>
                </div>
            </div>    
          </section>
        </>
    )
}

export default Login
