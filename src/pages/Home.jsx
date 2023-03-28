import styles from "../scss/Home.module.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Home() {
	return (
		<div className={styles.Home}>
			<Navbar />
			<div className={styles.Wrapper}>
				<h1>Home</h1>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
