import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

import ss1 from '../../../../src/assets/images/chef-mania/chef_mania_1.png'
import ss2 from '../../../../src/assets/images/chef-mania/chef_mania_2.png'
import ss3 from '../../../../src/assets/images/chef-mania/chef_mania_3.png'
import ss4 from '../../../../src/assets/images/chef-mania/chef_mania_4.png'
import ss5 from '../../../../src/assets/images/chef-mania/chef_mania_5.png'

const Chef = () => {
    return (
        <div>
            <h2 className="font-bold text-3xl uppercase flex justify-center pt-20 mb-5">Projects_3</h2>
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
 • 1. In Homepage you can see our menu what about our chef and their recipes and our services...
<br /> <br />
• 2.You can Login or register to continue or visit in our page...
<br /> <br />
• 3.if you clicked view botton in chef card. you can visit his/her recipes..
<br /> <br />
• 4.chef card has  recipe lists, bio, chef picture, chef name , how many peopels likes them ,years of experience and ratings of recipes...
<br /> <br />
• 5.you can select your favourite recipes though...
<br /> <br />
• 6.you can also visit our blog page .their you can find some question and answer ...
                        </p>
                        <Link to="/">
                            <button className="btn  text-white bg-gradient-to-r from-stone-300 via-slate-500 to-zinc-300 hover:from-slate-200 hover:to-stone-400 mt-3">Back To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Chef;