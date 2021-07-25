import React, { useState,useEffect } from 'react';
import blog from '../img/blog.jpg';
import experiment from '../img/experiment.jpg';
import weather1 from '../img/weather1.jpg';


const Home = () => {

    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);
    const userHomePage=async()=>{
        try{
            const res =await fetch('/getdata',{
              method:"GET",
              headers:{
            "Content-Type": "application/json"
              }
            });
            const data=await res.json();
            console.log(data);
            setUserName(data.name);
            setShow(true)
    
        }catch(err){
          console.log(err);
        }
    }
    useEffect(() => {
        userHomePage()
      }, []);
    return (
        <>
            <div className="container-fluid main_header home-page">
            <div className="row">
            <div className="col-md-6 col-12 mx-auto main_header_left">
                <p className="pt-5">WELCOME</p>
                <h1>{userName}</h1>
                <h2>{show? 'Happy to see you back' : 'TO OUR WEBSITE'}</h2>
            </div>
            <div className="col-md-6 col-12 main_header_right">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                      <a href="https://project0-crud.herokuapp.com/">
                        <img src={blog} className="w-100 img" alt="blog" />
                      </a>
                      </div>
                      <div className="carousel-item">
                      <a href="https://weather421.herokuapp.com/">
                        <img src={weather1} className="w-100 img" alt="weather1" />
                      </a>
                      </div>
                      <div className="carousel-item">
                      <a href="https://n6gnplzsh9ohz7rzmh1uaq-on.drv.tw/jay/quotes/">
                        <img src={experiment} className="w-100 img" alt="experiment" />
                      </a>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Home
