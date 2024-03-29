import React from "react";
import pinned from "../assets/pinnedFiction.png";
import wild from "../assets/wildxperience.png";
import harry from "../assets/HARRY.png";
import carhub from "../assets/carhub.png";
import aiguapure from "../assets/aiguapure.png";
import recipe from "../assets/recipe.png";

const Work = () => {
  return (
    <div name="work" className="w-full lg:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p class="py-6 ">Check out some of my recent work</p>
        </div>
        {/* CONTAINER gets up to 3 columns when need to add new work just copy the whole grid until I get 3 columns then copy the container(3 grids, 3 more projects) */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* GRID ITEM */}
          <div
            style={{ backgroundImage: `url(${carhub})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* //HOVER EFECTS */}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="justify-center text-2xl font-bold text-white tracking-wider">
                Typescript / React App
              </span>
              <div className="pt-8 text-center">
                <a href="https://carhub-vercel-caieyav0p-thexishuai.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${aiguapure})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* //HOVER EFECTS */}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider">
                WP/ PHP App
              </span>
              <div className="pt-8 text-center">
                <a href="http://aiguapure.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${wild})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* //HOVER EFECTS */}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider">
                React App
              </span>
              <div className="pt-8 text-center">
                <a href="https://iridescent-panda-8f1d82.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* CONTAINER gets up to 3 columns when need to add new work just copy the whole grid until I get 3 columns then copy the container(3 grids, 3 more projects) */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
          {/* GRID ITEM */}
          <div
            style={{ backgroundImage: `url(${pinned})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* //HOVER EFECTS */}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider">
                Handlebars App
              </span>
              <div className="pt-8 text-center">
                <a href="https://pinnedfictionfs.adaptable.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${recipe})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* //HOVER EFECTS */}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider">
                React App
              </span>
              <div className="pt-8 text-center">
                <a href="https://recipes-app-kappa-jet.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${harry})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* //HOVER EFECTS */}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider">
                Javascript Game App
              </span>
              <div className="pt-8 text-center">
                <a href="https://thexishuai.github.io/firstGameProject/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
