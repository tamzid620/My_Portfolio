import './MyProjects.css'
import {
  BsFillArrowRightCircleFill,
  BsFillMenuButtonWideFill,
} from "react-icons/bs";
import { GrServer } from "react-icons/gr";
import restaurant from "../../../../../src/assets/images/Resturant_Project/Banner.png";
import school from "../../../../../src/assets/images/school_Management/Banner.png";
import consultancy from "../../../../../src/assets/images/Student Consultancy/Banner.png";
import azraelle from "../../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp_ss.png";
import handy from "../../../../../src/assets/images/handy-toy/handy_toy_ss.png";
import Ecommerce from "../../../../../src/assets/images/E-commerce/HomePage.png";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const MyProjects = () => {
  Aos.init();

  return (
    <div className="py-20 bg-white">
      <h2
        style={{ fontFamily: "Arsenal SC, sans-serif" }}
        className=" text-4xl uppercase flex justify-center mb-5"
      >
        My Projects
      </h2>
      <hr className="border-[#5BCCF6]" />
      <div className="flex justify-center mt-10 ">
        {/*---------------- my projects card rounded-sm --------------- */}
        <div
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
          className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {/*  Restaurant Project*/}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1400"
            className="card rounded-md border bg-gray-200 lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl
            border-t-4 border-slate-200"
          >
            <figure>
              <img
                className="p-2 w-full h-56 rounded-md"
                src={restaurant}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <p className="flex justify-between">
                <span>
                  <h2 className="card-title text-[18px]  text-purple-700">
                    Restaurant Project
                  </h2>
                </span>
                <span>
                  <a
                    href="https://restaurant.4softbd.com/"
                    target="_blank"
                    className="w-[60px] p-1 rounded-sm
                  flex items-center
                   bg-gradient-to-r from-yellow-500 to-black
                    hover:from-black hover:to-yellow-500
                    text-xs text-white"
                    rel="noreferrer"
                  >
                    Visit <BsFillArrowRightCircleFill className="ms-2" />
                  </a>
                </span>
              </p>
              <p className="font-semibold mb-5">
                <span>• Html, Css, JavaScript,</span> <br />
                <span>• Nodejs, React, tailwind</span> <br />
                <span>• Vite,Laravel, Php, </span> <br />
                <span>• ReactIcons, Sweetalert2, etc...</span> <br />
              </p>
              <div className="card-actions justify-between">
                <div>
                  <Link to="/restaurant">
                    <div
                      className="flex justify-center items-center w-[85px] p-1 rounded-sm
                   bg-gradient-to-r from-green-500 to-green-700
                    hover:from-green-700 hover:to-green-500
                    text-xs text-white"
                    >
                      Details{" "}
                      <BsFillMenuButtonWideFill size={20} className="ms-2 icon" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* E-commerce */}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="900"
            className="card rounded-sm lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl bg-gray-200 border-t-4 border-slate-200"
          >
            <figure>
              <img
                className="p-2 w-full h-56 rounded-xl"
                src={Ecommerce}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <p className="card-title flex justify-between text-[18px]  text-purple-700">
               <span>E-commerce</span>
               <span>
                <a
                  href="https://e-commerce-project-trial-1.netlify.app/"
                  target="_blank"
                  className="w-[60px] p-1 rounded-sm
                  flex items-center
                   bg-gradient-to-r from-yellow-500 to-black
                    hover:from-black hover:to-yellow-500
                    text-xs text-white"
                  rel="noreferrer"
                >
                  Visit <BsFillArrowRightCircleFill className="ms-2" />
                </a>
               </span>
              </p>
              <p className="font-semibold mb-5">
                <span>• Html, Css, JavaScript,</span> <br />
                <span>• Nodejs, tailwind</span> <br />
                <span>• React, Vite </span> <br />
                {/* <span>• Netlify, ReactIcons, Reacttoast, etc...</span> <br /> */}
              </p>
              <div className="flex justify-between">
                <div>
                  <Link to="/">
                    <div
                      className="flex justify-center items-center w-[85px] p-1 rounded-sm
                   bg-gradient-to-r from-green-500 to-green-700
                    hover:from-green-700 hover:to-green-500
                    text-xs text-white"
                    >
                      Details{" "}
                      <BsFillMenuButtonWideFill size={20} className="ms-2 icon" />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <div
                      className="flex justify-center items-center w-[95px] p-1 rounded-sm
                   bg-gradient-to-r from-blue-500 to-blue-700
                    hover:from-blue-700 hover:to-blue-500
                    text-xs text-white"
                    >
                      Client_Site
                      <GrServer size={20}  className="ms-2 icon" />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <div
                      className="flex justify-center items-center w-[95px] p-1 rounded-sm
                   bg-gradient-to-r from-red-500 to-red-700
                    hover:from-red-700 hover:to-red-500
                    text-xs text-white"
                    >
                      Server_Site <GrServer size={20} className="ms-2 icon" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* language Course  */}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1100"
            className="card rounded-sm lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl
            bg-gray-200 border-t-4 border-slate-200"
          >
            <figure>
              <img className="p-2 rounded-xl" src={azraelle} alt="Shoes" />
            </figure>
            <div className="card-body">
              <p className="card-title flex justify-between text-[18px]  text-purple-700">
               <span>Language Course</span>
               <span>
                <a
                  href="https://azraelle-language-camp.web.app/"
                  target="_blank"
                  className="w-[60px] p-1 rounded-sm
                  flex items-center
                   bg-gradient-to-r from-yellow-500 to-black
                    hover:from-black hover:to-yellow-500
                    text-xs text-white"
                  rel="noreferrer"
                >
                  Visit <BsFillArrowRightCircleFill className="ms-2" />
                </a>
               </span>
              </p>
              <p className="font-semibold mb-5">
                <span>• Html, Css, JavaScript,</span> <br />
                <span>• Nodejs, Mongodb, Stripe, tailwind</span> <br />
                <span>• React, Vite, JWT token, expressjs, </span> <br />
                <span>• Firebase, ReactIcons, Sweetalert2, etc...</span> <br />
              </p>
              <div className="flex justify-between">
                <div>
                  <Link to="/azraelle">
                    <div
                      className="flex justify-center items-center w-[85px] p-1 rounded-sm
                   bg-gradient-to-r from-green-500 to-green-700
                    hover:from-green-700 hover:to-green-500
                    text-xs text-white"
                    >
                      Details{" "}
                      <BsFillMenuButtonWideFill size={20} className="ms-2 icon" />
                    </div>
                  </Link>
                </div>

                <div>
                  <Link to="https://github.com/tamzid620/azraelle-language-camp_client">
                    <div
                      className="flex justify-center items-center w-[95px] p-1 rounded-sm
                   bg-gradient-to-r from-blue-500 to-blue-700
                    hover:from-blue-700 hover:to-blue-500
                    text-xs text-white"
                    >
                      Client_Site <GrServer size={20} className="ms-2 icon" />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to="https://github.com/tamzid620/azraelle-language-camp-server">
                    <div
                      className="flex justify-center items-center w-[95px] p-1 rounded-sm
                   bg-gradient-to-r from-red-500 to-red-700
                    hover:from-red-700 hover:to-red-500
                    text-xs text-white"
                    >
                      Server_Site <GrServer size={20} className="ms-2 icon" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Handy Toy */}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="700"
            className="card rounded-sm lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl bg-gray-200 border-t-4 border-slate-200"
          >
            <figure>
              <img className="p-2 rounded-xl" src={handy} alt="Shoes" />
            </figure>
            <div className="card-body">
              <p className="card-title flex justify-between text-[18px]  text-purple-700">
               <span>Toy Store</span>
               <span>
                <a
                  href="https://handy-toy.web.app/"
                  target="_blank"
                  className="w-[60px] p-1 rounded-sm
                  flex items-center
                   bg-gradient-to-r from-yellow-500 to-black
                    hover:from-black hover:to-yellow-500
                    text-xs text-white"
                  rel="noreferrer"
                >
                  Visit <BsFillArrowRightCircleFill className="ms-2" />
                </a>
               </span>
              </p>
              <p className="font-semibold mb-5">
                <span>• Html, Css, JavaScript, </span> <br />
                <span>• Nodejs, Mongodb, tailwind</span> <br />
                <span>• React, Vite, expressjs, </span> <br />
                <span>• Firebase, ReactIcons, Reacttoast, etc...</span> <br />
              </p>
              <div className="flex justify-between">
                <div>
                  <Link to="/handy">
                    <div
                      className="flex justify-center items-center w-[85px] p-1 rounded-sm
                   bg-gradient-to-r from-green-500 to-green-700
                    hover:from-green-700 hover:to-green-500
                    text-xs text-white"
                    >
                      Details
                      <BsFillMenuButtonWideFill size={20} className="ms-2 icon" />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link target="_blank" to="https://github.com/tamzid620/handy_toy_client">
                  <div
                    className="flex justify-center items-center w-[95px] p-1 rounded-sm
                   bg-gradient-to-r from-blue-500 to-blue-700
                    hover:from-blue-700 hover:to-blue-500
                    text-xs text-white"
                  >
                    Client_Site
                    <GrServer  size={20} className="ms-2 icon" />
                  </div>
                  </Link>
                  </div>

                  <div>
                    <Link to="https://github.com/tamzid620/handy-toy-store-server"
                    target="_blank">
                  <div
                    className="flex justify-center items-center w-[95px] p-1 rounded-sm
                   bg-gradient-to-r from-red-500 to-red-700
                    hover:from-red-700 hover:to-red-500
                    text-xs text-white"
                  >
                    Server_Site <GrServer  size={20} className="ms-2 icon" />
                  </div>
                    </Link>
                </div>
              </div>
            </div>
          </div>

          {/* School Management   */}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1400"
            className="card rounded-sm lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl border-t-4 bg-gray-200 border-slate-200"
          >
            <figure>
              <img className="p-2 rounded-xl" src={school} alt="Shoes" />
            </figure>
            <div className="card-body">
                  <p className="card-title flex justify-between text-[18px]  text-purple-700">
                <span>
                    School Management
                </span>
                  
                <span>
                  <a
                    href="https://65b9eacd2cc4ca960cabfea2--dazzling-custard-561e7f.netlify.app/"
                    target="_blank"
                    className="w-[60px] p-1 rounded-sm
                  flex items-center
                   bg-gradient-to-r from-yellow-500 to-black
                    hover:from-black hover:to-yellow-500
                    text-xs text-white"
                    rel="noreferrer"
                  >
                    Visit <BsFillArrowRightCircleFill className="ms-2" />
                  </a>
                </span>
                </p>
              <p className="font-semibold mb-5">
                <span>• Html, Css, JavaScript,</span> <br />
                <span>• Nodejs, React, tailwind</span> <br />
                <span>• Vite,Laravel, Php, </span> <br />
                <span>• ReactIcons, Sweetalert2, etc...</span> <br />
              </p>
              <div className="card-actions justify-between">
                <div>
                  <Link to="/school">
                    <div
                      className="flex justify-center items-center w-[85px] p-1 rounded-sm
                   bg-gradient-to-r from-green-500 to-green-700
                    hover:from-green-700 hover:to-green-500
                    text-xs text-white"
                    >
                      Details{" "}
                      <BsFillMenuButtonWideFill size={20} className="ms-2 icon" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Student-consultancy  */}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1400"
            className="card rounded-sm lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl border-t-4 bg-gray-200 border-slate-200"
          >
            <figure>
              <img className="p-2 rounded-xl" src={consultancy} alt="Shoes" />
            </figure>
            <div className="card-body">
                  <h2 className="card-title flex justify-between text-[18px]  text-purple-700">
                <span>Student Consultancy</span>
                <span>
                  <a
                    href="https://student-consultancy-998.netlify.app/"
                    target="_blank"
                    className="w-[60px] p-1 rounded-sm
                  flex items-center
                   bg-gradient-to-r from-yellow-500 to-black
                    hover:from-black hover:to-yellow-500
                    text-xs text-white"
                    rel="noreferrer"
                  >
                    Visit <BsFillArrowRightCircleFill className="ms-2" />
                  </a>
                </span>
                </h2>
              <p className="font-semibold mb-5">
                <span>• Html, Css, JavaScript,</span> <br />
                <span>• Nodejs, React, tailwind</span> <br />
                <span>• Vite,Laravel, Php, </span> <br />
                <span>• ReactIcons, Sweetalert2, etc...</span> <br />
              </p>
              <div className="card-actions justify-between">
                <div>
                  <Link to="/consultancy">
                    <div
                      className="flex justify-center items-center w-[85px] p-1 rounded-sm
                   bg-gradient-to-r from-green-500 to-green-700
                    hover:from-green-700 hover:to-green-500
                    text-xs text-white"
                    >
                      Details{" "}
                      <BsFillMenuButtonWideFill size={20} className="ms-2 icon" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProjects;
