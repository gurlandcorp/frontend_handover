import Header from "../Shared/Header";
import About from "./about";
import Brand from "./Brand";
import FooterSection from "../Shared/FooterSection";
import PropertyBanner from "../Home/PropertyBanner";

const DetailPage = () => {
	return (
		<>
			<Header />
			<About />
			{/* <Brand /> */}
			<PropertyBanner/>
			<FooterSection />
		</>
	);
};

export default DetailPage;
