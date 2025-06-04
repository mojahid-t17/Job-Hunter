import Banner from "../../Components/Banner";
import Jobs from "../Jobs/Jobs";
import BestCompanies from "./BestCompanies";
import CompanyHighlights from "./CompanyHighlights";
import WhyUs from "./WhyUs";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CompanyHighlights></CompanyHighlights>
            <Jobs></Jobs>
            <BestCompanies></BestCompanies>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;