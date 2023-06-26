import facebook from '../../../src/assets/icons/facebook.png'
import instagram from '../../../src/assets/icons/instagram.png'
import linkedin from '../../../src/assets/icons/linkedin.png'
import github from '../../../src/assets/icons/github.png'

const Footer = () => {
    return (
        <div>
            <div className="mt-20">
                <footer className="footer p-5 bg-base-200 footer-center">

                    <div>
                        <h2 className='mb-3 font-semibold'>Contact With Me</h2>
                        <div className="grid grid-flow-col gap-4">
                            <div><a href="https://www.facebook.com/tamzid.ull.monir512"><img style={{ width: "30px" }} src={facebook} alt="" /></a></div>

                            <div><a href="https://www.instagram.com/Tamzid_Ull_Monir/"><img style={{ width: "30px" }} src={instagram} alt="" /></a></div>

                            <div><a href="https://www.linkedin.com/in/tamzid-monir-96b163260/"><img style={{ width: "30px" }} src={linkedin} alt="" /></a></div>

                            <div><a href="https://github.com/tamzid620"><img style={{ width: "30px" }} src={github} alt="" /></a></div>
                        </div>
                    </div>
                </footer>
                <footer className="footer footer-center p-4 bg-base-300 text-base-content font-semibold">
                    <div>
                        <p>Copyright  2023 - All right reserved by Tamzid Ull Monir</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;