import ParticlesBg from "particles-bg";
import Banner from "../HomeSection/Banner/Banner";
import MyEmail from "../HomeSection/MyEmail/MyEmail";
import MyProjects from "../HomeSection/MyProjects/MyProjects";
import MySkills from "../HomeSection/MySkills/MySkills";

const Home = () => {
    return (
        <div>
            <ParticlesBg num={100} type="cobweb" bg={true} />
            <Banner />
            <MySkills/>
            <MyProjects/>
            {/* <Blog/> */}
            <MyEmail/>
        </div>
    );
};

export default Home;