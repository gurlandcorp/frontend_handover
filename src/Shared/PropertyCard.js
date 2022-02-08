import Blog4 from "../assets/img/blog/blog4.jpg";
import Blog5 from "../assets/img/blog/blog5.jpg";
import Blog6 from "../assets/img/blog/blog6.jpg";
import Blog7 from "../assets/img/blog/blog7.jpg";
import Blog8 from "../assets/img/blog/blog8.jpg";
import Blog9 from "../assets/img/blog/blog9.jpg";
import Blog13 from "../assets/img/blog/blog13.jpg";
import Blog14 from "../assets/img/blog/blog14.jpg";
import Blog15 from "../assets/img/blog/blog15.jpg";
import Blog16 from "../assets/img/blog/blog16.jpg";
import Blog17 from "../assets/img/blog/blog17.jpg";
import Blog18 from "../assets/img/blog/blog18.jpg";
import { useNavigate } from "react-router-dom";
const PropertyCard = (props) => {
	const history = useNavigate();
	return (
		<div className="col-lg-6 col-md-6">
			<div className="property-box2 wow animated fadeInUp" data-wow-delay=".3s">
				<div className="item-img">
					<a
						onClick={() => {
							localStorage.setItem("propertyId", props?.data._id);
							history("/detailpage", { state: { propertyId: props?.data } });
						}}
						// href="single-listing1.html"
					>
						<img
							src={props.data.images[0]}
							alt="blog"
							style={{ width: "510px", height: "340px" }}
						/>
					</a>
					<div className="item-category-box1">
						<div className="item-category">For Rent</div>
					</div>
					<div className="rent-price">
						<div className="item-price">
							AED {props.data.priceDemand}
							{/* <span>
								<i>/</i>mo
							</span> */}
						</div>
					</div>
					<div className="react-icon">
						<ul>
							<li>
								<a
									// href="favourite.html"
									data-bs-toggle="tooltip"
									data-bs-placement="top"
									title="Favourites"
								>
									<i className="flaticon-heart"></i>
								</a>
							</li>
							<li>
								<a
									// href="compare.html"
									data-bs-toggle="tooltip"
									data-bs-placement="top"
									title="Compare"
								>
									<i className="flaticon-left-and-right-arrows"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="item-category10">
					<a

					//  href="single-listing1.html"
					>
						Appartment
					</a>
				</div>
				<div className="item-content">
					<div className="verified-area">
						<h3 className="item-title">
							<a
							// href="single-listing1.html"
							>
								{props.data.propertyTitle}
							</a>
						</h3>
					</div>
					<div className="location-area">
						<i className="flaticon-maps-and-flags"></i>
						{/* Downey, California */}
						{props.data.location.city}
					</div>
					<div className="item-categoery3">
						<ul>
							<li>
								<i className="flaticon-bed"></i>Beds: {props.data.bedrooms}
							</li>
							<li>
								<i className="flaticon-shower"></i>Baths: {props.data.bathrooms}
							</li>
							<li>
								<i className="flaticon-two-overlapping-square"></i>
								931 Sqft
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		// <div className="col-lg-12">
		//   <div
		//     className="property-box2 property-box4 wow animated fadeInUp"
		//     data-wow-delay=".6s"
		//   >
		//     <div className="item-img">
		//       <a href="single-listing1.html">
		//         <img src={Blog18} alt="blog" width="250" height="200" />
		//       </a>
		//       <div className="item-category-box1">
		//         <div className="item-category">For Rent</div>
		//       </div>
		//     </div>
		//     <div className="item-content item-content-property">
		//       <div className="item-category10">
		//         <a href="single-listing1.html">Appartment</a>
		//       </div>
		//       <div className="react-icon react-icon-2">
		//         <ul>
		//           <li>
		//             <a
		//               href="favourite.html"
		//               data-bs-toggle="tooltip"
		//               data-bs-placement="bottom"
		//               title="Favourites"
		//             >
		//               <i className="flaticon-heart"></i>
		//             </a>
		//           </li>
		//           <li>
		//             <a
		//               href="compare.html"
		//               data-bs-toggle="tooltip"
		//               data-bs-placement="bottom"
		//               title="Compare"
		//             >
		//               <i className="flaticon-left-and-right-arrows"></i>
		//             </a>
		//           </li>
		//         </ul>
		//       </div>
		//       <div className="verified-area">
		//         <h3 className="item-title">
		//           <a href="single-listing1.html">Family House For Rent</a>
		//         </h3>
		//       </div>
		//       <div className="location-area">
		//         <i className="flaticon-maps-and-flags"></i>Downey, California
		//       </div>
		//       <div className="item-categoery3">
		//         <ul>
		//           <li>
		//             <i className="flaticon-bed"></i>Beds: 03
		//           </li>
		//           <li>
		//             <i className="flaticon-shower"></i>Baths: 02
		//           </li>
		//           <li>
		//             <i className="flaticon-two-overlapping-square"></i>
		//             931 Sqft
		//           </li>
		//         </ul>
		//       </div>
		//     </div>
		//   </div>
		// </div>
	);
};

export default PropertyCard;
