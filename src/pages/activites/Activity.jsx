import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./activity.module.scss";

export default function Activity() {
	const { id } = useParams();

	const [item, setItem] = useState({});

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id || 1}`)
			.then((res) => res.json())
			.then((data) => setItem(data));
	}, []);

	return (
		<div className={styles.ItemWrapper}>
			{item.description ? (
				<div className={styles.Item}>
					<img
						src={item.image}
						alt={item.title}
					/>
					<section className={styles.content}>
						<h3>{item.title}</h3>
						<p className={styles.desc}>{item.description}</p>
						<p>Prezzo: {item.price}$</p>
					</section>
				</div>
			) : (
				<h3>Il Prodotto Non Esiste</h3>
			)}
		</div>
	);
}
