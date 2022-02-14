import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import AllListing from "./AllListing/AllListing";
import DetailPage from "./detailPage/Index";
import Contact from './contact/Index'
import About from './about/Index'
import FooterSection from "./Shared/FooterSection";
import Header from "./Shared/Header";
import Verification from "./Verification";

function App() {

	const { pathname } = useLocation()

	useEffect(()=>{
		document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
	},[pathname])

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
