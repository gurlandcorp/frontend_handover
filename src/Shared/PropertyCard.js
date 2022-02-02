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
		<div class="col-lg-6 col-md-6">
			<div class="property-box2 wow animated fadeInUp" data-wow-delay=".3s">
				<div class="item-img">
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
					<div class="item-category-box1">
						<div class="item-category">For Rent</div>
					</div>
					<div class="rent-price">
						<div class="item-price">
							AED {props.data.priceDemand}
							{/* <span>
								<i>/</i>mo
							</span> */}
						</div>
					</div>
					<div class="react-icon">
						<ul>
							<li>
								<a
									// href="favourite.html"
									data-bs-toggle="tooltip"
									data-bs-placement="top"
									title="Favourites"
								>
									<i class="flaticon-heart"></i>
								</a>
							</li>
							<li>
								<a
									// href="compare.html"
									data-bs-toggle="tooltip"
									data-bs-placement="top"
									title="Compare"
								>
									<i class="flaticon-left-and-right-arrows"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="item-category10">
					<a

					//  href="single-listing1.html"
					>
						Appartment
					</a>
				</div>
				<div class="item-content">
					<div class="verified-area">
						<h3 class="item-title">
							<a
							// href="single-listing1.html"
							>
								{props.data.propertyTitle}
							</a>
						</h3>
					</div>
					<div class="location-area">
						<i class="flaticon-maps-and-flags"></i>
						{/* Downey, California */}
						{props.data.location.city}
					</div>
					<div class="item-categoery3">
						<ul>
							<li>
								<i class="flaticon-bed"></i>Beds: {props.data.bedrooms}
							</li>
							<li>
								<i class="flaticon-shower"></i>Baths: {props.data.bathrooms}
							</li>
							<li>
								<i class="flaticon-two-overlapping-square"></i>
								931 Sqft
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		// <div class="col-lg-12">
		//   <div
		//     class="property-box2 property-box4 wow animated fadeInUp"
		//     data-wow-delay=".6s"
		//   >
		//     <div class="item-img">
		//       <a href="single-listing1.html">
		//         <img src={Blog18} alt="blog" width="250" height="200" />
		//       </a>
		//       <div class="item-category-box1">
		//         <div class="item-category">For Rent</div>
		//       </div>
		//     </div>
		//     <div class="item-content item-content-property">
		//       <div class="item-category10">
		//         <a href="single-listing1.html">Appartment</a>
		//       </div>
		//       <div class="react-icon react-icon-2">
		//         <ul>
		//           <li>
		//             <a
		//               href="favourite.html"
		//               data-bs-toggle="tooltip"
		//               data-bs-placement="bottom"
		//               title="Favourites"
		//             >
		//               <i class="flaticon-heart"></i>
		//             </a>
		//           </li>
		//           <li>
		//             <a
		//               href="compare.html"
		//               data-bs-toggle="tooltip"
		//               data-bs-placement="bottom"
		//               title="Compare"
		//             >
		//               <i class="flaticon-left-and-right-arrows"></i>
		//             </a>
		//           </li>
		//         </ul>
		//       </div>
		//       <div class="verified-area">
		//         <h3 class="item-title">
		//           <a href="single-listing1.html">Family House For Rent</a>
		//         </h3>
		//       </div>
		//       <div class="location-area">
		//         <i class="flaticon-maps-and-flags"></i>Downey, California
		//       </div>
		//       <div class="item-categoery3">
		//         <ul>
		//           <li>
		//             <i class="flaticon-bed"></i>Beds: 03
		//           </li>
		//           <li>
		//             <i class="flaticon-shower"></i>Baths: 02
		//           </li>
		//           <li>
		//             <i class="flaticon-two-overlapping-square"></i>
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
