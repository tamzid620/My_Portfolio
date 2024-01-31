import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import ss1 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp1.png'
import ss2 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp2.png'
import ss3 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp3.png'
import ss4 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp4.png'
import ss5 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp5.png'
import ss6 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp6.png'
import ss7 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp7.png'
import ss8 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp8.png'
import ss9 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp9.png'
import ss10 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp10.png'
import ss11 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp11.png'
import ss12 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp12.png'
import ss13 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp13.png'
import ss14 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp14.png'
import { Link } from "react-router-dom";

const Restaurant = () => {
    return (
        <div>
            <h2 className="font-bold text-3xl uppercase flex justify-center pt-20 mb-5">Projects_1</h2>
            <hr />
            <div className="flex justify-center items-center">
                <div className="mt-20 grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 ">
                    <div className="flex justify-center">
                        <Carousel className="w-[350px]">
                            <div className="w-[350px]">
                                {/* <img src={ss1} /> */}
                            </div>
                            <div className="w-[350px]">
                                {/* <img src={ss2} /> */}
                            </div>
                            <div className="w-[350px]">
                                {/* <img src={ss3} /> */}
                            </div>
                            <div className="w-[350px]">
                                {/* <img src={ss4} /> */}
                            </div>
                            <div className="w-[350px]">
                                {/* <img src={ss5} /> */}
                            </div>
                            <div className="w-[350px]">
                                {/* <img src={ss6} /> */}
                            </div>
                            <div className="w-[350px]">
                                {/* <img src={ss7} /> */}
                            </div>
                            <div className="w-[350px]">
                                {/* <img src={ss8} /> */}
                            </div>
                            <div className="w-[350px]">
                                {/* <img src={ss9} /> */}
                            </div>
                            <div className="w-[350px]">
                                {/* <img src={ss10} /> */}
                            </div>
                            <div className="w-[350px]">
                                {/* <img src={ss11} /> */}
                            </div>
                            <div className="w-[350px]">
                                {/* <img src={ss12} /> */}
                            </div>
                            <div className="w-[350px]">
                                {/* <img src={ss13} /> */}
                            </div>
                            <div className="w-[350px]">
                                {/* <img src={ss14} /> */}
                            </div>
                        </Carousel>
                    </div>
                    <div className="mt-20 w-full font-semibold lg:-ms-10 sm: ms-3">
                        <p>
                            ➊ Website name  :  Restaurant Project <br />

                            ➋website features: <br />
                            ‣ IN homepage you can see our menu , online order , cattering services packages section  <br />

                            ‣ In Order Tracking page you can See the actual condition of your ordered meals. <br />

                            ‣ in menu page you can see out menu <br />

                            ‣ In press page , you can see the celebrities photo who has visited our Restaurant <br />

                            ‣ if you login as admin , you can control the whole website , also if you login as delivery man . you can accept meals home delivery order<br />

                            ➌ Used packages/ technology name : <br /> <br />
=>  in client site ------------ <br />
                            ‣ Slick-carousel <br />
                            ‣ Material-tailwind/react <br />
                            ‣ React Aos <br />
                            ‣ React Apex Chart <br />
                            ‣ React Select <br />
                            ‣ React Rating <br />
                            ‣ React Print <br />
                            ‣ React Toastify <br />
                            ‣ React Typewriter <br />
                            ‣ Slick carousel <br />
                            ‣ Axious <br />
                            ‣ React icons <br />
                            ‣ Sweet alert <br />
                            ‣ Daisy ui <br />
                            ‣ Vite <br /> <br />
=>  in server site ------------- <br />
                            ‣ PHP <br />
                            ‣ Laravel <br />
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

export default Restaurant;