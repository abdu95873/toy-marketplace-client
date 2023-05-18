import Banner from "./Banner";
import MarqueeSection from "./MarqueeSection";
import PhoneSection from "./PhoneSection";
import TabsList from "./TabsList";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TabsList></TabsList>
            <MarqueeSection></MarqueeSection>
            <PhoneSection></PhoneSection>
        </div>
    );
};

export default Home;