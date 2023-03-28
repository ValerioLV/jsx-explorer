import styles from "../scss/About.module.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const About = () => {
	return (
		<div className={styles.About}>
			<Navbar />
			<div className={styles.Wrapper}>
				<h1>About Me</h1>
			</div>
			<Footer />
		</div>
	);
};

export default About;
