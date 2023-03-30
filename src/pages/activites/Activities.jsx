import { useEffect, useState } from "react";
import { GET } from "../../utils/get";
import CardList from "../../components/cardList";
import styles from "./activities.module.scss";

export default function Activities() {
	const [activity, setActivity] = useState([]);
	// useEffect(() => {
	// 	fetch("https://fakestoreapi.com/products")
	// 		.then((res) => res.json())
	// 		.then((data) => setActivity(data));
	// }, []);

	useEffect(() => {
		GET("activities").then((data) => setActivity(() => data.results));
	}, []);

	const prodFilter = (list, category) =>
		list.filter((item) => item["@type"].includes(category));

	return (
		<div className={styles.Activities}>
			<section className={styles.ActvisList}>
				<h3>Restaurants</h3>
				<CardList data={prodFilter(activity, "Restaurant")} />
			</section>
			<section>
				<h3>Museums</h3>
				<CardList data={prodFilter(activity, "Museum")} />
			</section>
		</div>
	);
}
