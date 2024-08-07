import html from "../../../../../src/assets/icons/html.png";
import css from "../../../../../src/assets/icons/css.png";
import JavaScript from "../../../../../src/assets/icons/js.png";
import nextJs from "../../../../../src/assets/icons/Next.js-removebg-preview.png";
import react from "../../../../../src/assets/icons/react.png";
import node from "../../../../../src/assets/icons/node.png";
import tailwind from "../../../../../src/assets/icons/tailwind.png";
import bootstrap from "../../../../../src/assets/icons/bootstrap.png";
import stripe from "../../../../../src/assets/icons/stripe.png";
import mongodb from "../../../../../src/assets/icons/mb.png";
import expressjs from "../../../../../src/assets/icons/express.png";
import firebase from "../../../../../src/assets/icons/firebase.png";
import redux from "../../../../../src/assets/icons/redux.png";
import gitHub from "../../../../../src/assets/icons/github.png";
import materialUi from "../../../../../src/assets/icons/material ui .png";
import Aos from "aos";
import "aos/dist/aos.css";

const MySkills = () => {
  Aos.init();

  return (
    <div className=" py-14 bg-white">
      <h2 style={{ fontFamily: "Arsenal SC, sans-serif"}}  className=" text-4xl uppercase flex justify-center mb-5">
        My Skills
      </h2>
      <hr className="border-[#5BCCF6]" />
      {/* ----------------flex div------------------  */}
      <div
        data-aos="fade-down"
        className="flex justify-center mt-10 uppercase font-semibold"
      >
        {/* -----------------grid div -------------- */}
        <div
         style={{ fontFamily: "Nunito Sans, sans-serif"}}
         className=" grid sm: grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* html logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="shadow-2xl bg-transparent border-t-2 border-slate-200 p-2 rounded-lg w-[160px] flex justify-center"
          >
            <div className="inner-element">
              <img className="w-[100px]" src={html} alt="" /> <br />
              <h1 className="flex justify-center">HTML</h1>
            </div>
          </div>
          {/* css logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="shadow-2xl bg-transparent border-t-2 border-slate-200 p-2 rounded-lg w-[160px] flex justify-center"
          >
            <div className="inner-element">
              <img className="w-[100px]" src={css} alt="" />
              <h1 className="flex justify-center">css</h1>
            </div>
          </div>
          {/* Bootstrap logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className="shadow-2xl bg-transparent border-t-2 border-slate-200 p-2 rounded-lg w-[160px] flex justify-center"
          >
            <div className="inner-element">
              <img className="w-[100px]" src={bootstrap} alt="" /> <br />
              <h1 className="flex justify-center">bootstrap</h1>
            </div>
          </div>
          {/* tailwind logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className="shadow-2xl bg-transparent border-t-2 border-slate-200 p-2 rounded-lg w-[160px] flex justify-center"
          >
            <div className="inner-element">
              {" "}
              <br />
              <img className="w-[100px]" src={tailwind} alt="" /> <br />
              <h1 className="flex justify-center">tailwind</h1>
            </div>
          </div>
          {/* materialUi logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className="shadow-2xl bg-transparent border-t-2 border-slate-200 p-2 rounded-lg w-[160px] flex justify-center"
          >
            <div className="inner-element">
              <img className="w-[100px]" src={materialUi} alt="" />
              <h1 className="flex justify-center">Material Ui</h1>
            </div>
          </div>
          {/* JavaScript logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="shadow-2xl bg-transparent border-t-2 border-slate-200 p-2 rounded-lg w-[160px] flex justify-center"
          >
            <div className="inner-element">
              <img className="w-[100px]" src={JavaScript} alt="" />
              <h1 className="flex justify-center">JavaScript</h1>
            </div>
          </div>
          {/* NextJs logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1400"
            className="shadow-2xl bg-transparent border-t-2 border-slate-200 p-2 rounded-lg w-[160px] flex justify-center"
          >
            <div className="inner-element">
              <img className="w-[120px]" src={nextJs} alt="" />
              <h1 className="flex justify-center">NextJs</h1>
            </div>
          </div>
          {/* React logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="shadow-2xl bg-transparent border-t-2 border-slate-200 p-2 rounded-lg w-[160px] flex justify-center"
          >
            <div className="inner-element">
              <img className="w-[100px]" src={react} alt="" />
              <h1 className="flex justify-center">React.js</h1>
            </div>
          </div>
          {/* Redux logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="shadow-2xl bg-transparent border-t-2 border-slate-200 p-2 rounded-lg w-[160px] flex justify-center"
          >
            <div className="inner-element">
              <img className="w-[100px]" src={redux} alt="" />
              <h1 className="flex justify-center">Redux</h1>
            </div>
          </div>
          {/* Node logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="shadow-2xl bg-transparent border-t-2 border-slate-200 p-2 rounded-lg w-[160px] flex justify-center"
          >
            <div className="inner-element">
              <img className="w-[100px]" src={node} alt="" />
              <h1 className="flex justify-center">node.js</h1>
            </div>
          </div>
          {/* Express Js logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1400"
            className="shadow-2xl bg-transparent border-t-2 border-slate-200 p-2 rounded-lg w-[160px] flex justify-center"
          >
            <div className="inner-element">
              {" "}
              <br />
              <img className="w-[100px]" src={expressjs} alt="" /> <br />
              <h1 className="flex justify-center">express.js</h1>
            </div>
          </div>
          {/* MongoDb logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1400"
            className="shadow-2xl bg-transparent border-t-2 border-slate-200 p-2 rounded-lg w-[160px] flex justify-center"
          >
            <div className="inner-element">
              <img className="w-[100px]" src={mongodb} alt="" />
              <h1 className="flex justify-center">mongodb</h1>
            </div>
          </div>
          {/* Stripe logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1400"
            className="shadow-2xl bg-transparent border-t-2 border-slate-200 p-2 rounded-lg w-[160px] flex justify-center"
          >
            <div className="inner-element">
              <img className="w-[100px]" src={stripe} alt="" /> <br />
              <h1 className="flex justify-center">stripe</h1>
            </div>
          </div>
          {/* firebase logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1400"
            className="shadow-2xl bg-transparent border-t-2 border-slate-200 p-2 rounded-lg w-[160px] flex justify-center"
          >
            <div className="inner-element">
              <img className="w-[100px]" src={firebase} alt="" />
              <h1 className="flex justify-center">firebase</h1>
            </div>
          </div>
          {/* gitHub logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1400"
            className="shadow-2xl bg-transparent border-t-2 border-slate-200 p-2 rounded-lg w-[160px] flex justify-center"
          >
            <div className="inner-element">
              <img className="w-[100px]" src={gitHub} alt="" />
              <h1 className="flex justify-center">gitHub</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MySkills;
