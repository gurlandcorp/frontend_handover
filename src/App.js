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
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import AllListing from "./AllListing/AllListing";
import DetailPage from "./detailPage/Index";
import Contact from './contact/Index'
import About from './about/Index'


function App() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/allListing" element={<AllListing />} />
				<Route path="/detailpage" element={<DetailPage />} />
				<Route path="/about" element={<About/>} />
				<Route path="/contact" element={<Contact/>} />

			</Routes>
		</main>
	);
}
export default App;
