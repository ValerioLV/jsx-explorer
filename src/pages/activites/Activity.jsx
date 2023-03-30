import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../utils/get";
import styles from "./activity.module.scss";

export default function Activity() {
	const { id } = useParams();

	const [item, setItem] = useState({});

	useEffect(() => {
		GET(`activities?$filter=name%20eq%20%27${id}`).then((data) =>
			// setItem(() => data.results[0]),
			console.log(data),
		);
	}, []);

	return (
		<div className={styles.ItemWrapper}>
			aaaaa
			{item.name ? (
				<div className={styles.Item}>
					{/* <img
						src={item.image}
						alt={item.title}
					/> */}
					{/* <section className={styles.content}>
						<h3>{item.name}</h3>
						<p className={styles.desc}>{item.name}</p>
					</section> */}
				</div>
			) : (
				<h3>Il Prodotto Non Esiste</h3>
			)}
		</div>
	);
}
