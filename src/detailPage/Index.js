import MainDetail from "./mainDetail";
import LatestListing from "../Shared/LatestListing";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const DetailPage = () => {

	const {state} = useParams()
	useEffect(() => {
	},[state])
	return (
		<>
			<MainDetail id={state} />
			<LatestListing />
		</>
	);
};

export default DetailPage;
