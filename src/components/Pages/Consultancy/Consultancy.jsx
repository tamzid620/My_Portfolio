import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

import ss1 from '../../../../src/assets/images/Student Consultancy/homePage.png'
import ss2 from '../../../../src/assets/images/Student Consultancy/loginPage.png'
import ss3 from '../../../../src/assets/images/Student Consultancy/signUpPage.png'
import ss4 from '../../../../src/assets/images/Student Consultancy/AdminPanel.png'

const Consultancy = () => {
    return (
        <div>
            <h2 className="font-bold text-3xl uppercase flex justify-center pt-20 mb-5">Projects_3</h2>
            <hr />
            <div className="flex justify-center items-center">
                <div className="mt-20 grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 ">
                    <div className="flex justify-center">
                        <Carousel className="w-[350px]">
                            <div className="w-[350px]">
                                <img src={ss1} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss2} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss3} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss4} />
                            </div>
                        </Carousel>
                    </div>
                    <div className="mt-20 w-full font-semibold lg:-ms-10 sm: ms-3">
                        <p>
                            ➊ Website name  :  Student Consultancy <br />

                            ➋website features: <br /> 
• 1. In homepage you can see a banner about out consultancy. and our sponsered university , our helpline our info,our cmapus <br /> <br />

• 2. In AdminPanel you can control the whole website <br /> <br />
                    </p>
                        <Link to="/">
                            <button className="btn  text-white bg-gradient-to-r from-stone-300 via-slate-500 to-zinc-300 hover:from-slate-200 hover:to-stone-400 mt-3">Back To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consultancy;