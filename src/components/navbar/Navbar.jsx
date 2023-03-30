import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./index.module.scss";

const Navbar = () => {
	const [inputSearch, setInputSearch] = useState("");
	const navigate = useNavigate();

	const onHandleInput = (e) => {
		setInputSearch(() => e.target.value);
	};

	const onHandleSubmit = (e) => {
		e.preventDefault();
		navigate(`/city/${inputSearch.toLowerCase()}`);
	};

	return (
		<nav className={styles.Navbar}>
			<Link to={"/"}>Home</Link>
			<Link to={"/about"}>About</Link>
			<Link to={"/activities"}>Activities</Link>
			<form onSubmit={onHandleSubmit}>
				<input
					type="text"
					placeholder="Search"
					value={inputSearch}
					onChange={onHandleInput}
					required
				/>
			</form>
		</nav>
	);
};

export default Navbar;
