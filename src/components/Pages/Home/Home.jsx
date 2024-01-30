import Banner from "../HomeSection/Banner/Banner";
// import Blog from "../HomeSection/Blog/Blog";
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
        </div>
    );
};

export default Home;