import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import ss1 from '../../../../src/assets/images/azahar-mia-family/azaharmia-2.png'
import ss2 from '../../../../src/assets/images/azahar-mia-family/azaharmia-3.png'
import ss3 from '../../../../src/assets/images/azahar-mia-family/azaharmia-4.png'
import ss4 from '../../../../src/assets/images/azahar-mia-family/azaharmia-5.png'
import ss5 from '../../../../src/assets/images/azahar-mia-family/azaharmia-6.png'


const AzaharMia = () => {
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
                        </Carousel>
                    </div>
                    <div className="mt-20 w-full font-semibold lg:-ms-10 sm: ms-3">
                        <p>
                            ➊ Website name  :  Azahar Mia Family <br />

                            ➋website features: <br />
                            ‣ Azahar Mia's family roots reach back to the late 16th century Cox-Bazar Bangladesh. Founded by Azahar Mia, the Rich Businessman, who married Nur Zahan Begum and together they started a family which now spans over Three generations.

                            ➌ Used packages/ technology name : <br /> <br />
=>  in client site ------------ <br />
                            ‣ react font-awsome icon <br />
                            ‣ flat color icon <br />
                            ‣ sweet alert <br />
                            ‣ daisy ui <br />
                            ‣ vite <br /> <br />
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

export default AzaharMia;
