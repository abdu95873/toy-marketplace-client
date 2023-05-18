import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import MarqueeSection from "./MarqueeSection";
import PhoneSection from "./PhoneSection";
import TabsList from "./TabsList";


const Home = () => {
    const allTrucks = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <TabsList
                allTrucks={allTrucks}
            ></TabsList>
            <MarqueeSection></MarqueeSection>
            <PhoneSection></PhoneSection>
        </div>
    );
};

export default Home;