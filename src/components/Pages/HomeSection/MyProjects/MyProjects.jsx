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
    <h2 className="card-title">
    azraelle_language_camp
    <a href="https://azraelle-language-camp.web.app/" target="_blank" className="badge badge-warning border-gray-500  hover:bg-slate-400" rel="noreferrer">Visit <BsFillArrowRightCircleFill className="ms-2"/></a>

    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
        <div> 
        <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">Details <BsFillMenuButtonWideFill className="ms-2"/></div>
        </div>
        <div>
      <div className="badge badge-info font-semibold border-gray-500">Client_Site <GrServer/></div> 
      <div className="badge badge-error font-semibold ms-2 border-gray-500">Server_Site <GrServer/></div>
        </div>
    </div>
  </div>
</div>

<div className="card w-96 shadow-xl transform hover:scale-105 transition duration-300 bg-gradient-to-r from-slate-300 via-stone-200 to-zinc-400">
  <figure><img className='p-2 rounded-xl' src={handy} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    handy_toy_Store
    <a href="https://handy-toy.web.app/" target="_blank" className="badge badge-warning border-gray-500  hover:bg-slate-400" rel="noreferrer">Visit <BsFillArrowRightCircleFill className="ms-2"/></a>

    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
        <div> 
        <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">Details <BsFillMenuButtonWideFill className="ms-2"/></div>
        </div>
        <div>
      <div className="badge badge-info font-semibold border-gray-500">Client_Site <GrServer/></div> 
      <div className="badge badge-error font-semibold ms-2 border-gray-500">Server_Site <GrServer/></div>
        </div>
    </div>
  </div>
</div>

<div className="card w-96 shadow-xl transform hover:scale-105 transition duration-300 bg-gradient-to-r from-slate-300 via-stone-200 to-zinc-400">
  <figure><img className='p-2 rounded-xl' src={chef} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    chef_mania
    <a href="https://chef-mania-3ef19.web.app/" target="_blank" className="badge badge-warning border-gray-500  hover:bg-slate-400" rel="noreferrer">Visit <BsFillArrowRightCircleFill className="ms-2"/></a>

    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
        <div> 
        <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">Details <BsFillMenuButtonWideFill className="ms-2"/></div>
        </div>
        <div>
      <div className="badge badge-info font-semibold border-gray-500">Client_Site <GrServer/></div> 
      <div className="badge badge-error font-semibold ms-2 border-gray-500">Server_Site <GrServer/></div>
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