import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from "../img/vip.jpg";

const About = () => {

  const history= useHistory();
  const [userData, setUserData] = useState({});

  const callAboutPage=async()=>{
      try{
        const res =await fetch('/about',{
          method:"GET",
          headers:{
            "Accept": "application/json",
        "Content-Type": "application/json"
          },
          credentials:"include"
        });
        const data=await res.json();
        console.log(data);
        setUserData(data);

        if(!res.status===200){
          const error=new Error(res.error);
          throw error;
        }
      }catch(err){
        console.log(err);
        history.push('/login')
      }
  }

  useEffect(() => {
    callAboutPage()
  }, []);
    return (
      <>
        <div className="container emp-profile">
          <form method="GET">
            <div className="row">
              <div className="col-md-4">
                <img src={logo} alt="logo" height="170px" width="160px" />
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>{userData.name}</h5>
                  <h6>{userData.work}</h6>
                  <p className="profile-rating mt-3 mb-5">
                    RANKING: <span>1/10</span>
                  </p>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Timeline
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <input
                  type="submit"
                  className="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </div>
            </div>
            <div className="row">
              {/* left side Url */}
              <div className="col-md-4">
                <div className="profile-work">
                  <p>WORK LINK</p>
                  <a href="#">Youtube</a>
                  <br /><br />
                  <a href="#">Youtube</a>
                  <br /><br />
                  <a href="#">Youtube</a>
                  <br /><br />
                  <a href="#">Youtube</a>
                  <br /><br />
                </div>
              </div>
              {/* right side data toggle */}
              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    area-aria-labelledby="home-tab"
                  >
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData._id}</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.name}</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Email Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.email}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    area-aria-labelledby="profile-tab"
                  >
                   <div className="row mt-3">
                      <div className="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData._id}</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.name}</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Email Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.email}</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Phone No.</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.phone}</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Proffesion</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.work}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
}

export default About
