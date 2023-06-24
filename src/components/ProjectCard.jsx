import React from 'react'

const ProjectCard = ({title,info}) => {
  return (
    <div>
         <div className=" flex justify-around w-full h-56 py-10 ">
                <div className="w-4/5 md:w-2/5 lg:w-2/5 h-56 bg-slate-300 rounded-md">
                    <img className="w-full h-full rounded-md" src="https://dashdevs.com/top-frontend-technologies-2022-desktop_1046447266366100626_hub0fa8df50bd0eae2c13e3515ce6273ca_0_1176x0_resize_q85_h2_box.webp" alt=""/>
                </div>
             <div className="w-2/5  hidden md:block">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className=" mt-5 font-sans">{info}</p>
                <button className="w-32 mt-6 lg:block h-11 hover:text-white bg-cyan-300 hover:bg-gradient-to-r from-green-500 to-sky-500 rounded text-center py-2 hidden">Daha Ətraflı</button>
             </div>
            </div>
    </div>
  )
}

export default ProjectCard
