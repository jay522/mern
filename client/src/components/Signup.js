import React,{useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import sign from '../img/registration.jpg'
import Account from '@material-ui/icons/AccountBox';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import KeyIcon from '@material-ui/icons/VpnKey';

const Signup = () => {

    const history=useHistory();
    const [user, setUser] = useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    })

    const handleInput=(e)=>{
        // console.log(e)
        const {name,value}=e.target;
        setUser({...user,[name]:value});
    }
    // using Fetch api
    const PostData=async(e)=>{
        e.preventDefault();

        const {name,email,phone,work,password,cpassword}=user;

        const res=await fetch('/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        })
        const data=await res.json();
        if(res.status===422|| !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else{
            window.alert("Registration Successfull");
            console.log("Registration Successfull");
            history.push("/login")
        }
    }

    return (
        <>
          <section className="signup">
            <div className="container mt-5">
                <div className="row signup-content">
                    <div className="signup-form col-6">
                        <h2 className="form-title">Sign Up</h2>
                        <form className="register-form" method="POST" id="register-form">
                            <div className="form-group">
                                <lable htmlFor="name"> <Account /> </lable>
                                <input type="text" name="name" id="name" autoComplete="off"
                                value={user.name}
                                onChange={handleInput}
                                placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <lable htmlFor="email"> <MailOutlineIcon /> </lable>
                                <input type="email" name="email" id="email" autoComplete="off"
                                value={user.email}
                                onChange={handleInput}
                                placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <lable htmlFor="phone"> <PhoneAndroidIcon /> </lable>
                                <input type="number" name="phone" id="phone" autoComplete="off"
                                value={user.phone}
                                onChange={handleInput}
                                placeholder="Your phone" />
                            </div>
                            <div className="form-group">
                                <lable htmlFor="work"> <WorkOutlineIcon /> </lable>
                                <input type="text" name="work" id="work" autoComplete="off"
                                value={user.work}
                                onChange={handleInput}
                                placeholder="Your Profession" />
                            </div>
                            <div className="form-group">
                                <lable htmlFor="password"> <KeyIcon /> </lable>
                                <input type="password" name="password" id="password" autoComplete="off"
                                value={user.password}
                                onChange={handleInput}
                                placeholder="Your Password" />
                            </div>
                            <div className="form-group">
                                <lable htmlFor="cpassword"> <KeyIcon /> </lable>
                                <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                value={user.cpassword}
                                onChange={handleInput}
                                placeholder="Confirm Your Password" />
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" value="register" onClick={PostData} />
                                {/* <a>signup</a> */}
                            </div>
                        </form>
                    </div>
                    <div className="signup-image col-6">
                        <figure>
                            <img src={sign} alt="signup" />
                        </figure>
                        <NavLink to="/login" className="signup-image-link">I have already registered.</NavLink>
                    </div>
                </div>
            </div>    
          </section>  
        </>
    )
}

export default Signup
