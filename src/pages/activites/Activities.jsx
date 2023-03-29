import { useEffect, useState } from "react";
import CardList from "../../components/cardList";
import styles from "./activities.module.scss";

export default function Activities() {
	const [activity, setActivity] = useState([]);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => setActivity(data));
	}, []);

	const prodFilter = (list, category) =>
		list.filter((item) => item.category === category);

	return (
		<div className={styles.Activities}>
			<section>
				<h3>Electronics</h3>
				<CardList data={prodFilter(activity, "electronics")} />
			</section>
			<section>
				<h3>Jewelery</h3>
				<CardList data={prodFilter(activity, "jewelery")} />
			</section>
		</div>
	);
}
