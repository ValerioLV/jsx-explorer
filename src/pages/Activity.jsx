import { useEffect, useState } from "react";
import { GET } from "../utils/get";

export default function Activity() {
	const [activity, setActivity] = useState([]);
	useEffect(() => {
		GET().then(({ description }) => {
			setActivity(() => description);
		});
	}, []);

	return (
		<div className="Activity">
			<h1>{activity}</h1>
		</div>
	);
}
