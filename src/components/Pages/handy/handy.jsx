import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

import ss1 from '../../../../src/assets/images/handy-toy/handy-toy-store-client1.png'
import ss2 from '../../../../src/assets/images/handy-toy/handy-toy-store-client2.png'
import ss3 from '../../../../src/assets/images/handy-toy/handy-toy-store-client3.png'
import ss4 from '../../../../src/assets/images/handy-toy/handy-toy-store-client4.png'
import ss5 from '../../../../src/assets/images/handy-toy/handy-toy-store-client5.png'
import ss6 from '../../../../src/assets/images/handy-toy/handy-toy-store-client6.png'
import ss7 from '../../../../src/assets/images/handy-toy/handy-toy-store-client7.png'
import ss8 from '../../../../src/assets/images/handy-toy/handy-toy-store-client8.png'


const Handy = () => {
    return (
        <div>
            <h2 className="font-bold text-3xl uppercase flex justify-center pt-20 mb-5">Projects_4</h2>
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
                            <div className="w-[350px]">
                                <img src={ss5} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss6} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss7} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss8} />
                            </div>
                        </Carousel>
                    </div>
                    <div className="mt-20 w-full font-semibold lg:-ms-10 sm: ms-3">
                        <p>
                            ➊ Website name  :  Toy Store <br />

                            ➋website features: <br /> 
• 1. In homepage you can see a banner about out shop. and we also have so many section about shop category section ,latest news section , our gallery section  etc <br /> <br />

• 2.we have toys collection all toys , my toys , add toys. <br /> <br />

• 3.you can visit our toys collections by login or registration <br /> <br />

• 4.we have a blog page.there you can see some informative questions and answer <br /> <br />

• 5.you can see toys details by click on view details button <br /> <br />

• 6.we make our webpage clean and optimized and orderly.also we make it colorful <br /> <br />
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

export default Handy;