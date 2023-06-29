import bannerimg from '../../../../../src/assets/images/result.png'
import Typewriter from 'react-ts-typewriter';


const Banner = () => {


    return (

        <div style={{ justifyItems: "center" }} className='grid sm:grid-cols-1 lg:grid-cols-2 items-center'>
            <div className=' sm: ms-3 lg:ms-20 lg:mt-40 sm: mt-20'>
                <p className="font-semibold ">
                    <span className="font-bold text-1xl uppercase text-purple-700">Assalamualikum, </span> <br />
                    <span className="font-bold text-3xl uppercase">I  am
                        <span className="text-purple-700"><Typewriter text=' Tamzid Ull Monir ,' /></span>
                    </span> <br />
                    <span> A passionate web developer dedicated to crafting exceptional online experiences. With a keen eye for design and a love for coding, I specialize in creating dynamic and user-friendly websites that leave a lasting impression. From front-end development using HTML, CSS, and JavaScript to back-end programming with expressjs and Mongodb and many more.</span>
                </p>
                <a href="https://drive.google.com/file/d/1VLm6Kt6Ko3p9Uq04p3qtY-0jCjH96xQ0/view"  target="_blank" rel="noreferrer">
                    <button className="btn text-white bg-gradient-to-r from-stone-300 via-slate-500 to-zinc-300 hover:from-slate-200 hover:to-stone-400 mt-3">Resume</button>
                </a>
            </div>
            <div className='card mt-16'>
                <div className='relative'>
                    <img className='w-[450px] rounded-full transition-transform duration-300 hover:scale-110' src={bannerimg} alt="" />
                </div>

            </div>
        </div>

    );
};

export default Banner;