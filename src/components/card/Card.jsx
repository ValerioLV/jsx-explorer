import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Card = ({ data }) => {
	const navigate = useNavigate();

	const onHandleClick = () => {
		navigate(`/activity/${data.name}%27`);
	};
	return (
		<div className={styles.Card}>
			<h4>{data.name}</h4>
			<img
				onClick={onHandleClick}
				src="https://picsum.photos/200/300"
				alt={data.name}
			/>
			<p>Phone: {data.telephone}</p>
		</div>
	);
};

export default Card;
