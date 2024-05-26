import Accordion from "../components/Home/Accordion";
import Banner from "../components/Home/Banner";
import Discount from "../components/Home/Discount";
import Products from "../components/Home/Products";

const Home = () => {

    return (
        <div>
            <Banner/>
            <Products/>
            <Discount/>
            <Accordion/>
        </div>
    );
};

export default Home;