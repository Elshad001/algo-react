import React, { Component } from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",width:"45px",height:"35px" , background: "#6FEBF8 ",marginRight: "-10px",
      borderRadius:"5px",padding: "10px" ,}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",width:"45px",height:"35px" , background:"#6FEBF8",marginLeft: "-10px",
      borderRadius:"5px",padding: "10px" ,color: "#f00" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="w-full h-72 px-12 bg-slate-100">
        <Slider {...settings} >
          <div>
          <ProjectCard title="Project 1" 
            info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dignissimos optio eaque vel, accusamus quisquam in! 
                    Alias, exercitationem velit minus tenetur hic voluptatem atque,
                     aut ipsam tempore at dolorum saepe nihil."/>
          </div>

          <div>
            <ProjectCard title="Project 2" 
            info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dignissimos optio eaque vel, accusamus quisquam in! 
                    Alias, exercitationem velit minus tenetur hic voluptatem atque,
                     aut ipsam tempore at dolorum saepe nihil."/>
          </div>

          <div>
          <ProjectCard title="Project 3" 
            info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dignissimos optio eaque vel, accusamus quisquam in! 
                    Alias, exercitationem velit minus tenetur hic voluptatem atque,
                     aut ipsam tempore at dolorum saepe nihil."/>
          </div>

          <div>
          <ProjectCard title="Project 4" 
            info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dignissimos optio eaque vel, accusamus quisquam in! 
                    Alias, exercitationem velit minus tenetur hic voluptatem atque,
                     aut ipsam tempore at dolorum saepe nihil."/>
          </div>

          <div>
          <ProjectCard title="Project 5" 
            info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dignissimos optio eaque vel, accusamus quisquam in! 
                    Alias, exercitationem velit minus tenetur hic voluptatem atque,
                     aut ipsam tempore at dolorum saepe nihil."/>
          </div>
       
        </Slider>
      </div>
    );
  }
}