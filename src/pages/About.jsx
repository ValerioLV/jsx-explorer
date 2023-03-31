import { useSearchParams } from "react-router-dom";
import styles from "../scss/About.module.scss";

const About = () => {
	const [searchParams] = useSearchParams();
	return (
		<div className={styles.About}>
			<div className={styles.Wrapper}>
				<h1>About Me</h1>
				{searchParams.get("desc") && <h3>{searchParams.get("desc")}</h3>}
			</div>
		</div>
	);
};

export default About;
