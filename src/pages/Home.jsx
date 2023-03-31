import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "../scss/Home.module.scss";

function Home() {
	const [inputValue, setInputValue] = useState("");
	const [pageNum, setPageNum] = useState("");
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const onHandleTextInput = (e) => setInputValue(() => e.target.value);

	const onHandlePageDecide = () => {
		const possiblePage = Math.floor(Math.random() * 10);
		if (possiblePage > 0) {
			setPageNum(possiblePage);
		} else {
			setPageNum(1);
		}
	};

	const onHandleSubmit = () => {
		if (pageNum <= 3) {
			navigate(`about?desc=${inputValue}`);
		} else if (3 < pageNum <= 7) {
			navigate(`/?desc=${inputValue}`);
		} else if (pageNum > 7) {
			navigate(`/city/boh?desc=${inputValue}`);
		}
	};

	return (
		<div className={styles.Home}>
			<div className={styles.Wrapper}>
				<h1>Home</h1>
				<form onSubmit={onHandleSubmit}>
					<h3>Cosa ne pensi del sito? Scrivilo e apparirà in una pagina</h3>
					<textarea
						value={inputValue}
						onChange={onHandleTextInput}
						name="desc"
						cols="50"
						rows="20"
						required
					/>
					{pageNum > 0 && (
						<input
							type="submit"
							value="Invia"
						/>
					)}
				</form>
				<div className={styles.pageRedirector}>
					<h3>Premi per decidere casualmente la pagina in cui apparirà</h3>
					<button onClick={onHandlePageDecide}>Clicca Qui</button>
					<p>{pageNum}</p>
				</div>
				{searchParams.get("desc") && <h3>{searchParams.get("desc")}</h3>}
			</div>
		</div>
	);
}

export default Home;
