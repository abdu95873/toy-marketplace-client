import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import MarqueeSection from "./MarqueeSection";
import PhoneSection from "./PhoneSection";
import TabsList from "./TabsList";
import Gallery from "./Gallery";
import setTitle from "../../hooks/useTitle";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..



const Home = () => {
    setTitle('Kids Toy')
    const allTrucks = useLoaderData();
    AOS.init();
    return (
        <div >
            <Banner></Banner>
            <Gallery></Gallery>
            <TabsList
                allTrucks={allTrucks}
            ></TabsList>
            <MarqueeSection></MarqueeSection>
            <PhoneSection></PhoneSection>

            <div className=" first-letter:my-5 bg-slate-400" data-aos-delay="5">Try ti use AOS Package but its does not work </div>
        </div>
    );
};

export default Home;