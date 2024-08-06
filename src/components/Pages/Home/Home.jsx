import ParticlesBg from "particles-bg";
import Banner from "../HomeSection/Banner/Banner";
import MyEmail from "../HomeSection/MyEmail/MyEmail";
import MyProjects from "../HomeSection/MyProjects/MyProjects";
import MySkills from "../HomeSection/MySkills/MySkills";
import CurvDiv from "../HomeSection/CurvDiv/CurvDiv";

const Home = () => {
    return (
        <div>
            <ParticlesBg num={400} type="cobweb" bg={true} />
            <Banner />
            <MySkills/>
            <MyProjects/>
            <CurvDiv/>
            {/* <Blog/> */}
            <MyEmail/>
        </div>
    );
};

export default Home;