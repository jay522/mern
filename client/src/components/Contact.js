import React, { useEffect, useState } from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import HomeIcon from '@material-ui/icons/Home';

const Contact = () => {

    const [user, setUser] = useState({name:"",email:"",phone:"",message:""});


    const callContactPage=async()=>{
        try{
            const res =await fetch('/getdata',{
              method:"GET",
              headers:{
            "Content-Type": "application/json"
              }
            });
            const data=await res.json();
            console.log(data);
            setUser({...user,name:data.name,email:data.email,phone:data.phone});
    
            if(!res.status===200){
              const error=new Error(res.error);
              throw error;
            }
        }catch(err){
          console.log(err);
        }
    }
  
    useEffect(() => {
      callContactPage()
    },[]);

    const handleInputs=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setUser({...user,[name]:value});
    }
    const contactForm=async(e)=>{
        e.preventDefault();
        const {name,email,phone,message}=user;

        const res=await fetch('/contact',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,message
            })
        });
        const data=await res.json();
        if(!data){
            console.log("message not send");
        }else{
            alert("Message sent");
            setUser({...user,message:""});
        }
    }
    return (
        <>
           <div className="contact-info">
               <div className="container-fluid">
                <div class="row mt-4 mt-2">
            <div className="col-sm-4">
                <div className="card d-flex justify-content-start align-items-center flex-row px-3">
                <PhoneAndroidIcon />
                <div className="card-body">
                    <h5 className="card-title">Phone</h5>
                    <p className="card-text">9123456789908</p>
                </div>
            </div>
            </div>
            <div className="col-sm-4 mt-2">
            <div className="card d-flex justify-content-start align-items-center flex-row px-3">
            <MailOutlineIcon />
                <div className="card-body">
                    <h5 className="card-title">Email</h5>
                    <p className="card-text">xyz@gmail.com</p>
                </div>
            </div>
            </div>
            <div className="col-sm-4 mt-2">
                    <div className="card d-flex justify-content-start align-items-center flex-row px-3">
                    <HomeIcon />
                    <div className="card-body">
                        <h5 className="card-title">Address</h5>
                        <p className="card-text">Bokaro,Jharkhand</p>
                    </div>
                    </div>
            </div>
</div>
 </div>
</div> 
          <div className="content_form mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="content_form_container">
                            <div className="contact_form_title mx-3">
                                Get In Touch
                            </div>
                            <form id="contact_form" className="mx-3" method="POST">
                                {/* add className="contact_form_name" if neccessary */}
                                <div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="d-flex justify-content-center align-items-center flex-row px-3">
                                            <input type="text" id="contact_form_name" className="input_field"
                                            onChange={handleInputs}
                                            name="name"
                                            value={user.name}
                                            placeholder="Your Name" required="true" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mt-2">
                                            <div className="d-flex justify-content-center align-items-center flex-row px-3">
                                            <input type="text" id="contact_form_name" className="input_field"
                                            onChange={handleInputs}
                                            name="email"
                                            value={user.email}
                                            placeholder="Your Email" required="true" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mt-2">
                                            <div className="d-flex justify-content-center align-items-center flex-row px-3">
                                            <input type="text" id="contact_form_name" className="input_field"
                                            onChange={handleInputs}
                                            name="phone"
                                            value={user.phone}
                                            placeholder="Your Number" required="true" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mt-2">
                                            <div className="d-flex justify-content-center align-items-center flex-row px-3">
                                            <textarea className="text_field contect_form_message" id="" cols="40" rows="10"
                                            onChange={handleInputs}
                                            name="message"
                                            value={user.message}
                                            placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mt-2">
                                        <div className="contact_form_button d-flex justify-content-center align-items-center flex-row mt-2 mb-5">
                                            <button type="submit" onClick={contactForm}>Send Message</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Contact
