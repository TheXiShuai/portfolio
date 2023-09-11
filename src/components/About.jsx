import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className=" sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
               Kindly take a look around{" "}
            </p>
          </div>
          <div>
            <p>
              I'm a multilingual web developer with a strong passion for coding.
              While my language skills in Spanish, English, Chinese, Portuguese,
              and Catalan help me connect, it's my adaptability and enthusiasm
              that truly shine in multicultural environments.
              <p />
              Outside of web development, I have a diverse range of interests. I
              love playing sports, traveling to explore new cultures, indulging
              in motorsports, getting lost in manga, and staying active through
              workouts.
            </p>

            <p>
              In the tech world, I'm a quick learner who enjoys staying
              up-to-date with the latest industry trends. When I work on
              projects, I make sure to deliver high-quality results on time,
              always aiming to exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
