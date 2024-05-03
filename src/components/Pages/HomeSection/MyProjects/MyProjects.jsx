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
    <div className="py-20 ">
      <h2 className="font-bold text-3xl uppercase flex justify-center mb-5">
        My Projects
      </h2>
      <hr className="border-[#5BCCF6]" />
      <div className="flex justify-center mt-10 ">
        <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/*---------------- my projects card --------------- */}

          {/* Handy Toy */}
          <div
            data-aos="flip-down"
            data-aos-duration="700"
            className="card lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl   bg-transparent border-t-2 border-slate-200"
          >
            <figure>
              <img className="p-2 rounded-xl" src={handy} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-purple-700">
                Toy Store
                <a
                  href="https://handy-toy.web.app/"
                  target="_blank"
                  className="badge badge-warning border-gray-500  hover:bg-slate-400"
                  rel="noreferrer"
                >
                  Visit <BsFillArrowRightCircleFill className="ms-2" />
                </a>
              </h2>
              <p className="font-semibold mb-5">
                <span>• Html, Css, JavaScript, </span> <br />
                <span>• Nodejs, Mongodb, tailwind</span> <br />
                <span>• React, Vite, expressjs, </span> <br />
                <span>• Firebase, ReactIcons, Reacttoast, etc...</span> <br />
              </p>
              <div className="card-actions justify-between">
                <div>
                  <Link to="/handy">
                    <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">
                      Details <BsFillMenuButtonWideFill className="ms-2" />
                    </div>
                  </Link>
                </div>
                <div>
                  <a
                    href="https://github.com/tamzid620/handy_toy_client"
                    target="_blank"
                    rel="noreferrer"
                    className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400"
                  >
                    Client_Site <GrServer />
                  </a>
                  <a
                    href="https://github.com/tamzid620/handy-toy-store-server"
                    target="_blank"
                    rel="noreferrer"
                    className="badge badge-error font-semibold ms-2 border-gray-500 hover:bg-slate-400"
                  >
                    Server_Site <GrServer />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* E-commerce */}
          <div
            data-aos="flip-down"
            data-aos-duration="900"
            className="card lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl   bg-transparent border-t-2 border-slate-200"
          >
            <figure>
              <img className="p-2 rounded-xl" src={Ecommerce} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-purple-700">
              E-commerce(running project)
                <a
                  href="https://e-commerce-project-trial-1.netlify.app/"
                  target="_blank"
                  className="badge badge-warning border-gray-500  hover:bg-slate-400"
                  rel="noreferrer"
                >
                  Visit <BsFillArrowRightCircleFill className="ms-2" />
                </a>
              </h2>
              <p className="font-semibold mb-5">
                <span>• Html, Css, JavaScript,</span> <br />
                <span>• Nodejs, tailwind</span> <br />
                <span>• React, Vite </span> <br />
                {/* <span>• Netlify, ReactIcons, Reacttoast, etc...</span> <br /> */}
              </p>
              <div className="card-actions justify-between">
                <div>
                  <Link to="/">
                    <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">
                      Details <BsFillMenuButtonWideFill className="ms-2" />
                    </div>
                  </Link>
                </div>
                <div>
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400"
                  >
                    Client_Site <GrServer />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="badge badge-error font-semibold ms-2 border-gray-500 hover:bg-slate-400"
                  >
                    Server_Site <GrServer />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Azraelle  */}
          <div
            data-aos="flip-down"
            data-aos-duration="1100"
            className="card lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl   bg-transparent border-t-2 border-slate-200"
          >
            <figure>
              <img className="p-2 rounded-xl" src={azraelle} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-purple-700">
                Language Course
                <a
                  href="https://azraelle-language-camp.web.app/"
                  target="_blank"
                  className="badge badge-warning border-gray-500  hover:bg-slate-400"
                  rel="noreferrer"
                >
                  Visit <BsFillArrowRightCircleFill className="ms-2" />
                </a>
              </h2>
              <p className="font-semibold mb-5">
                <span>• Html, Css, JavaScript,</span> <br />
                <span>• Nodejs, Mongodb, Stripe, tailwind</span> <br />
                <span>• React, Vite, JWT token, expressjs, </span> <br />
                <span>• Firebase, ReactIcons, Sweetalert2, etc...</span> <br />
              </p>
              <div className="card-actions justify-between">
                <div>
                  <Link to="/azraelle">
                    <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">
                      Details <BsFillMenuButtonWideFill className="ms-2" />
                    </div>
                  </Link>
                </div>
                <div>
                  <a
                    href="https://github.com/tamzid620/azraelle-language-camp_client"
                    target="_blank"
                    rel="noreferrer"
                    className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400"
                  >
                    Client_Site <GrServer />
                  </a>
                  <a
                    href="https://github.com/tamzid620/azraelle-language-camp-server"
                    target="_blank"
                    rel="noreferrer"
                    className="badge badge-error font-semibold ms-2 border-gray-500 hover:bg-slate-400"
                  >
                    Server_Site <GrServer />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Restaurant Project  */}
          <div
            data-aos="flip-down"
            data-aos-duration="1400"
            className="card lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl   bg-transparent border-t-2 border-slate-200"
          >
            <figure>
              <img className="p-2 rounded-xl" src={restaurant} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-purple-700">
                Restaurant Project(Team Project)
                <a
                  href="https://stunning-panda-61ddff.netlify.app/"
                  target="_blank"
                  className="badge badge-warning border-gray-500  hover:bg-slate-400"
                  rel="noreferrer"
                >
                  Visit <BsFillArrowRightCircleFill className="ms-2" />
                </a>
              </h2>
              <p className="font-semibold mb-5">
                <span>• Html, Css, JavaScript,</span> <br />
                <span>• Nodejs, React, tailwind</span> <br />
                <span>• Vite,Laravel, Php, </span> <br />
                <span>• ReactIcons, Sweetalert2, etc...</span> <br />
              </p>
              <div className="card-actions justify-between">
                <div>
                  <Link to="/restaurant">
                    <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">
                      Details <BsFillMenuButtonWideFill className="ms-2" />
                    </div>
                  </Link>
                </div>
                
              </div>
            </div>
          </div>

          {/* School Management   */}
          <div
            data-aos="flip-down"
            data-aos-duration="1400"
            className="card lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl   bg-transparent border-t-2 border-slate-200"
          >
            <figure>
              <img className="p-2 rounded-xl" src={school} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-purple-700">
                School Management(Team Project)
                <a
                  href="https://65b9eacd2cc4ca960cabfea2--dazzling-custard-561e7f.netlify.app/"
                  target="_blank"
                  className="badge badge-warning border-gray-500  hover:bg-slate-400"
                  rel="noreferrer"
                >
                  Visit <BsFillArrowRightCircleFill className="ms-2" />
                </a>
              </h2>
              <p className="font-semibold mb-5">
              <span>• Html, Css, JavaScript,</span> <br />
                <span>• Nodejs, React, tailwind</span> <br />
                <span>• Vite,Laravel, Php, </span> <br />
                <span>• ReactIcons, Sweetalert2, etc...</span> <br />
              </p>
              <div className="card-actions justify-between">
                <div>
                  <Link to="/school">
                    <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">
                      Details <BsFillMenuButtonWideFill className="ms-2" />
                    </div>
                  </Link>
                </div>
                
              </div>
            </div>
          </div>

          {/* Student-consultancy  */}
          <div
            data-aos="flip-down"
            data-aos-duration="1400"
            className="card lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl   bg-transparent border-t-2 border-slate-200"
          >
            <figure>
              <img className="p-2 rounded-xl" src={consultancy} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-purple-700">
                Student Consultancy(Team Project)
                <a
                  href="https://student-consultancy-998.netlify.app/"
                  target="_blank"
                  className="badge badge-warning border-gray-500  hover:bg-slate-400"
                  rel="noreferrer"
                >
                  Visit <BsFillArrowRightCircleFill className="ms-2" />
                </a>
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
                    <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">
                      Details <BsFillMenuButtonWideFill className="ms-2" />
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
