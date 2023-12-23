import Swal from "sweetalert2";
import emailimg from "../../../../../src/assets/icons/email.gif";
import {
  MdMarkEmailUnread,
  MdCall,
  MdWhatsapp,
  MdLocationOn,
} from "react-icons/md";
import facebook from "../../../../../src/assets/icons/facebook.png";
import instagram from "../../../../../src/assets/icons/instagram.png";
import linkedin from "../../../../../src/assets/icons/linkedin.png";
import github from "../../../../../src/assets/icons/github.png";
import emailjs from "emailjs-com";

emailjs.init("PIOjzCl1ftxF_58QU");

const MyEmail = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Swal.fire({
    //     icon: 'success',
    //     title: 'Email Sent',
    //     showConfirmButton: false,
    //     timer: 1500
    // })
    const params = {
      from_name: document.getElementById("fullName").value,
      email_id: document.getElementById("email_id").value,
      subject: document.getElementById("subject").value,
      Feedback: document.getElementById("message").value,
    };
    emailjs
      .send("service_6cazdak", "template_42ulb2t", params)
      .then(function (res) {
        // alert('Success!' + res.status);
        Swal.fire({
          icon: "success" + res.status,
          title: "Email Sent",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    console.log("button clicked");
  };

  return (
    <div className="my-20">
      <h2 className="font-bold text-3xl uppercase flex justify-center mb-5">
        Send Your Email
      </h2>
      <hr  className="border-[#5BCCF6]"/>
      <div className="flex justify-center mt-10">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2">
          {/* picture information seciton  */}
          <div className="text-lg">
            <img className="w-[500px] rounded-3xl mb-5" src={emailimg} alt="" />
            <p className="text-purple-900 font-semibold flex gap-3 items-center ms-3">
              <MdMarkEmailUnread className="text-red-500" /> E-mail :
              tamzid620@gmail.com
            </p>
            <p className="text-purple-900 font-semibold flex gap-3 items-center ms-3">
              <MdCall className="text-green-700" /> Phone : +8801852951963
            </p>
            <p className="text-purple-900 font-semibold flex gap-3 items-center ms-3">
              <MdWhatsapp className="text-green-500" /> what'sapp :
              +8801757566555
            </p>
            <p className="text-purple-900 font-semibold flex gap-3 items-center ms-3">
              <MdLocationOn className="text-yellow-400" /> Location :
              Chattogram,Bangladesh
            </p>
            <div className="footer p-5 ">
              <div>
                <h2 className="text-purple-900 mb-3 font-semibold">
                  Social Links:
                </h2>
                <div className="grid grid-flow-col gap-4">
                  <div>
                    <a href="https://www.facebook.com/tamzid.ull.monir512">
                      <img style={{ width: "30px" }} src={facebook} alt="" />
                    </a>
                  </div>

                  <div>
                    <a href="https://www.instagram.com/Tamzid_Ull_Monir/">
                      <img style={{ width: "30px" }} src={instagram} alt="" />
                    </a>
                  </div>

                  <div>
                    <a href="https://www.linkedin.com/in/tamzid-monir-96b163260/">
                      <img style={{ width: "30px" }} src={linkedin} alt="" />
                    </a>
                  </div>

                  <div>
                    <a href="https://github.com/tamzid620">
                      <img style={{ width: "30px" }} src={github} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* email input section  */}
          <div>
            <form
              onSubmit={handleSubmit}
              action="/submit-feedback"
              method="post"
              className="bg-[#FCDE67]   shadow-xl lg:w-[550px] sm:w-[350px] mx-auto p-4  rounded-md"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email_id"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Your E-mail"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="E-mail Subject"
                />
              </div>

              <div>
                <label
                  htmlFor="feedback"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Feedback:
                </label>
                <textarea
                  id="message"
                  name="feedback"
                  rows="5"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Your FeedBack"
                ></textarea>
              </div>

              {/* <input
                               className="bg-[#FCDE67] btn text-white bg-gradient-to-r from-stone-300 via-slate-500 to-zinc-300 hover:from-slate-200 hover:to-stone-400 mt-3 cursor-pointer" /> */}
              <button
                type="submit"
                className="btn uppercase bg-purple-800 hover:text-black text-white"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEmail;
