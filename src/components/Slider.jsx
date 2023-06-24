import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";







export default class PauseOnHover extends Component {

  
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow:1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
   
    };
    return (
      <div className="flex-col lg:flex w-full  mt-12">
        <Slider {...settings} >
          <div className="w-screen h-[500px]">
            <img className="w-screen h-full mt-0 mx-auto rounded" src="https://scontent.fgbb1-1.fna.fbcdn.net/v/t39.30808-6/321077339_1211846576434142_8929565794622211179_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DSmWKhp2E3oAX8pKG6g&_nc_oc=AQk5nMNDrht_vEzLYBEf-pPULgu0pSxW6PdUk46MX4u0yPeKF485qOXMImYOLVCv_6M&_nc_ht=scontent.fgbb1-1.fna&oh=00_AfBl-MIlz__GJn0Zj4aGGkBQ2HD55NgzE-EZK7FSwHwvGw&oe=64926A6F"  alt=""/>
          </div>
          <div  className="w-screen h-[500px]">
            <img className="w-screen h-full mt-0 mx-auto rounded" src="https://scontent.fgbb1-1.fna.fbcdn.net/v/t39.30808-6/342851386_1443168839831016_8684254115376121400_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=xxdfdEMKhD4AX85O5_V&_nc_ht=scontent.fgbb1-1.fna&oh=00_AfAr_2absAf5KZ4g-OelDpubxDZvO5hUor6reVzXammP2g&oe=6492721D" alt=""/>
          </div>
          <div className="w-screen h-[500px]">
            <img className="w-screen h-full mt-0 mx-auto rounded" src="https://scontent.fgbb1-1.fna.fbcdn.net/v/t39.30808-6/340247093_605064771545306_465036243118172283_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=9RJB1an_iT0AX-OlKi_&_nc_ht=scontent.fgbb1-1.fna&oh=00_AfABfcAwZkfO_KVzuaT4tY1F0NWMFcq4DHd5pM86d-XA-Q&oe=64936E0E" alt="" />
          </div>
          <div className="w-screen h-[500px]">
           <img className="w-screen h-full mt-0 mx-auto rounded" src="https://scontent.fgbb1-1.fna.fbcdn.net/v/t39.30808-6/339406198_250673560732163_827610220720342690_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cjQwe9sfIQoAX-PEdrV&_nc_ht=scontent.fgbb1-1.fna&oh=00_AfC1nb4P6W2t49_6eUoAT-TjItuXPqGIKRkRT7xqkJfpkw&oe=64921946" alt="" />
          </div>
          <div className="w-screen h-[500px]">
            <img className="w-screen h-full mt-0 mx-auto rounded" src="https://scontent.fgbb1-1.fna.fbcdn.net/v/t39.30808-6/332297734_598070901780366_5395389736928385842_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=BrIF3S-3NSoAX-R5uJL&_nc_ht=scontent.fgbb1-1.fna&oh=00_AfD-eUs0pQIK5Gr-tuwrDPCkK00LoBYIpS0bS3-xsz_QTA&oe=6492DC15" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}