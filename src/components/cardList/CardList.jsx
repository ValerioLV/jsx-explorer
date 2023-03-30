import Card from "../card";
import styles from "./index.module.scss";

const CardList = ({ data }) => {
	return (
		<div className={styles.CardList}>
			{data.map((item, i) => (
				<Card
					data={item}
					key={i}
				/>
			))}
		</div>
	);
};

export default CardList;
