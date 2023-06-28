import { BsFillArrowRightCircleFill, BsFillMenuButtonWideFill, } from "react-icons/bs";
import { GrServer } from "react-icons/gr";
import azraelle from '../../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp_ss.png'
import handy from '../../../../../src/assets/images/handy-toy/handy_toy_ss.png'
import chef from '../../../../../src/assets/images/chef-mania/chef_mania_ss.png'


const MyProjects = () => {
    return (
        <div className="my-20">
            <h2 className="font-bold text-3xl uppercase flex justify-center mb-5">My Projects</h2>
            <hr />
            <div className='flex justify-center mt-10 '>
<div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">

<div className="card w-96 shadow-xl transform hover:scale-105 transition duration-300 bg-gradient-to-r from-slate-300 via-stone-200 to-zinc-400">
  <figure><img className='p-2 rounded-xl' src={azraelle} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-purple-700">
    azraelle_language_camp
    <a href="https://azraelle-language-camp.web.app/" target="_blank" className="badge badge-warning border-gray-500  hover:bg-slate-400" rel="noreferrer">Visit <BsFillArrowRightCircleFill className="ms-2"/></a>

    </h2>
    <p className="font-semibold mb-5">
      <span >• Html, Css, JavaScript, nodejs</span> <br />
      <span >• Nodejs, Mongodb, Stripe, tailwind</span> <br />
      <span >• React, Vite, JWT token, expressjs, </span> <br />
      <span >• Firebase, ReactIcons, Sweetalert2, etc...</span> <br />
    </p>
    <div className="card-actions justify-between">
        <div> 
        <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">Details <BsFillMenuButtonWideFill className="ms-2"/></div>
        </div>
        <div>
      <a href="https://github.com/tamzid620/azraelle-language-camp_client" target="_blank" rel="noreferrer" className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400">Client_Site <GrServer/></a> 
      <a href="https://github.com/tamzid620/azraelle-language-camp-server" target="_blank" rel="noreferrer" className="badge badge-error font-semibold ms-2 border-gray-500 hover:bg-slate-400">Server_Site <GrServer/></a>
        </div>
    </div>
  </div>
</div>

<div className="card w-96 shadow-xl transform hover:scale-105 transition duration-300 bg-gradient-to-r from-slate-300 via-stone-200 to-zinc-400">
  <figure><img className='p-2 rounded-xl' src={handy} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-purple-700">
    handy_toy_Store
    <a href="https://handy-toy.web.app/" target="_blank" className="badge badge-warning border-gray-500  hover:bg-slate-400" rel="noreferrer">Visit <BsFillArrowRightCircleFill className="ms-2"/></a>

    </h2>
    <p className="font-semibold mb-5">
      <span >• Html, Css, JavaScript, nodejs</span> <br />
      <span >• Nodejs, Mongodb, tailwind</span> <br />
      <span >• React, Vite, expressjs, </span> <br />
      <span >• Firebase, ReactIcons, Reacttoast, etc...</span> <br />
    </p>
    <div className="card-actions justify-between">
        <div> 
        <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">Details <BsFillMenuButtonWideFill className="ms-2"/></div>
        </div>
        <div>
        <a href="https://github.com/tamzid620/handy_toy_client" target="_blank" rel="noreferrer" className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400">Client_Site <GrServer/></a> 
      <a href="https://github.com/tamzid620/handy-toy-store-server" target="_blank" rel="noreferrer" className="badge badge-error font-semibold ms-2 border-gray-500 hover:bg-slate-400">Server_Site <GrServer/></a>
        </div>
    </div>
  </div>
</div>

<div className="card w-96 shadow-xl transform hover:scale-105 transition duration-300 bg-gradient-to-r from-slate-300 via-stone-200 to-zinc-400">
  <figure><img className='p-2 rounded-xl' src={chef} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-purple-700">
    chef_mania
    <a href="https://chef-mania-3ef19.web.app/" target="_blank" className="badge badge-warning border-gray-500  hover:bg-slate-400" rel="noreferrer">Visit <BsFillArrowRightCircleFill className="ms-2"/></a>

    </h2>
    <p className="font-semibold mb-5">
      <span >• Html, Css, JavaScript, nodejs</span> <br />
      <span >• Nodejs, Mongodb, tailwind</span> <br />
      <span >• React, Vite, expressjs, </span> <br />
      <span >• Firebase, ReactIcons, Reacttoast, etc...</span> <br />
    </p>
    <div className="card-actions justify-between">
        <div> 
        <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">Details <BsFillMenuButtonWideFill className="ms-2"/></div>
        </div>
        <div>
        <a href="https://github.com/tamzid620/chef_mania_client" target="_blank" rel="noreferrer" className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400">Client_Site <GrServer/></a> 
      <a href="https://github.com/tamzid620/chef_manis_server" target="_blank" rel="noreferrer" className="badge badge-error font-semibold ms-2 border-gray-500 hover:bg-slate-400">Server_Site <GrServer/></a>
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