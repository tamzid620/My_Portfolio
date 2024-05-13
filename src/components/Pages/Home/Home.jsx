import ParticlesBg from "particles-bg";
import Banner from "../HomeSection/Banner/Banner";
import MyEmail from "../HomeSection/MyEmail/MyEmail";
import MyProjects from "../HomeSection/MyProjects/MyProjects";
import MySkills from "../HomeSection/MySkills/MySkills";

const Home = () => {
    return (
        <div>
            <Banner />
            <MySkills/>
            <MyProjects/>
            {/* <Blog/> */}
            <MyEmail/>
            <ParticlesBg num={100} type="cobweb" bg={true} />
        </div>
    );
};

export default Home;