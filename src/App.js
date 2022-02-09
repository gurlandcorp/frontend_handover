// import Home from "./Home/Home";
// import AllListing from "./AllListing/AllListing";
// function App() {
//   return (
//     <div className="sticky-header">
//       <div className="wrapper" id="wrapper">
//         {/* <Home /> */}
//         <AllListing />
//       </div>
//       <div id="template-search" class="template-search">
//         <button type="button" class="close">
//           ×
//         </button>
//         <form class="search-form">
//           <input type="search" value="" placeholder="Search" />
//           <button type="submit" class="search-btn btn-ghost style-1">
//             <i class="flaticon-search"></i>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default App;
import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./Home/Home";
import AllListing from "./AllListing/AllListing";
import DetailPage from "./detailPage/Index";
import Contact from './contact/Index'
import About from './about/Index'
import FooterSection from "./Shared/FooterSection";
import Header from "./Shared/Header";
import Verification from "./Verification";

function App() {

	return (
		<main>
			{
				window.location.search.search('code') == -1 ?
				(
					<>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/properties" element={<AllListing />} />
						<Route path="/property/:state" element={<DetailPage />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/user/verification" element={<Verification />} />
					</Routes>
					<FooterSection />
					</>
				) : (
					<Routes>
						<Route path="/user/verification" element={<Verification />} />
					</Routes>
				)
			}
		</main>
	);
}
export default App;
