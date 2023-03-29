import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Card = ({ data }) => {
	const navigate = useNavigate();

	const onHandleClick = () => {
		navigate(`/activity/${data.id}`);
	};
	return (
		<div className={styles.Card}>
			<img
				onClick={onHandleClick}
				src={data.image}
				alt={data.title}
			/>
			<h4>{data.title}</h4>
			<p>Prezzo: {data.price}$</p>
			<p>Ratings: {data.rating.rate}*</p>
		</div>
	);
};

export default Card;
