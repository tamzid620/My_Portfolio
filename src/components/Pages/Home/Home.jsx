import Banner from "../HomeSection/Banner/Banner";
import Blog from "../HomeSection/Blog/Blog";
import MyEmail from "../HomeSection/MyEmail/MyEmail";
import MyProjects from "../HomeSection/MyProjects/MyProjects";
import MySkills from "../HomeSection/MySkills/MySkills";

const Home = () => {
    return (
        <div>
            <div><Banner></Banner></div>

            <div><MySkills></MySkills></div>

            <div><MyProjects></MyProjects></div>

            <div><Blog></Blog></div>

            <div><MyEmail></MyEmail></div>
        </div>
    );
};

export default Home;