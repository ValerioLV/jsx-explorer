import { useEffect, useState } from "react";
import { GET } from "../utils/get";

export default function City() {
	const [cityInfo, setCity] = useState([]);

	useEffect(() => {
		GET().then(({ city }) => {
			setCity(() => city);
		});
	}, []);
	console.log(cityInfo);

	return (
		<div className="cityInfo">
			<h1>{cityInfo.name}</h1>
			<img
				src={cityInfo.cover_image_url}
				alt={cityInfo.name}
				width={300}
			/>
			{/* <p>Si trova in {cityInfo.country.name}</p> */}
		</div>
	);
}
