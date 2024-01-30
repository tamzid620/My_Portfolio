import bannerimg from "../../../../../src/assets/images/result.png";
import Typewriter from "react-ts-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  Aos.init();

  return (
    <div
      style={{ justifyItems: "center" ,alignItems:"center" }}
      className="grid sm:grid-cols-1 lg:grid-cols-2 items-center  pb-14 "
    >
      {/* Heading section  */}
      <div className=" sm: ms-3 lg:ms-20 lg:mt-[150px] md:mt-[150px] sm: mt-[120px]">
        <p className="font-semibold ">
          <span
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="font-bold text-1xl uppercase text-purple-800"
          >
            Assalamualikum,{" "}
          </span>{" "}
          <br />
          <span className="font-bold text-3xl uppercase">
            I am
            <span
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="text-purple-800"
            >
              <Typewriter text=" Tamzid Ull Monir ," />
            </span>
          </span>{" "}
          <br />
          <span
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            {" "}
            A passionate web developer dedicated to crafting exceptional online
            experiences. With a keen eye for design and a love for coding, I
            specialize in creating dynamic and user-friendly websites that leave
            a lasting impression. From front-end development using HTML, CSS,
            and JavaScript to back-end programming with expressjs and Mongodb
            and many more.
          </span>
        </p>
        <a
          href="https://drive.google.com/file/d/1wDnTcbX_yO23vDKiXNNKRphbrUeWuwPC/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="btn text-white mt-3
            bg-purple-800 hover:text-black shadow-2xl"
          >
            Resume
          </button>
        </a>
      </div>
      {/* banner picture section  */}
      <div>
          <img className="w-[350px] lg:mt-[100px] md:mt-0 sm:mt-0 rounded-full " src={bannerimg} alt="" />
     
      </div>
    </div>
  );
};

export default Banner;
