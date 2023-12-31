import React from "react";


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w=[1000px] mx-auto px-12 ml-12 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Hector
        </h1>
        <h2 className="text-4xl sm:text-7xl font bold text-[#8992b0]">I'm a Full Stack Developer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Welcome to my web portfolio, where you'll discover my journey through
          the world of web development and the projects that showcase my skills
          and dedication.
        </p>
      </div>
    </div>
  );
};

export default Home;
