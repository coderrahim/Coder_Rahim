import Banner from "../../Components/Pages/Home/Banner";
import Contact from "../../Components/Pages/Home/Contact";
import Projects from "../../Components/Pages/Home/Projects";
import Skills from "../../Components/Pages/Home/Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;