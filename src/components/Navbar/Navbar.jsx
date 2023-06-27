import { NavLink } from "react-router-dom";

const Navbar = () => {

  const navigation =
    <>
      <NavLink to="/"><li className="font-bold"><a>Home</a></li></NavLink>
      <NavLink to="/"><li className="font-bold"><a>Projects</a></li></NavLink>
      <NavLink to="/#blog"><li className="font-bold"><a>About Me</a></li></NavLink>
    </>

  return (
    <>
      <div className="navbar bg-base-300 justify-between fixed max-w-screen-xl z-10 bg-opacity-50">
        <div className="navbar-start">
          <p className="uppercase text-xl bg-gradient-to-r from-stone-300 via-slate-500 to-zinc-300 text-white p-2 rounded-xl">myportfolio</p>
        </div>

        <div className="navbar-end">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0">
              {navigation}
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navigation}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;