import { useEffect, useState } from "react";
import { city } from "../mock/city";
import { GET } from "../utils/get";

export default function City() {
	const [cityInfo, setCity] = useState({});
	useEffect(() => {
		setCity(city);
	}, []);

	return (
		<div className="cityInfo">
			<h1>{city.city.name}</h1>
			<img
				src={city.city.cover_image_url}
				alt={city.city.name}
				width={700}
			/>
			<p>
				{city.description} <br />
				{city.about} <br />
				{city.meeting_point}
			</p>
		</div>
	);
}
