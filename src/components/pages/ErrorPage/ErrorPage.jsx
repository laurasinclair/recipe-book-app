import errorGif from "../../../assets/Error404.gif";
// you could look into Vite aliases -> https://medium.com/@devxprite/how-to-setup-path-aliases-in-vite-df955939ffe8
// to be able to have imports like:
// import errorGif from "@/assets/Error404.gif";
// it's not just pretty, it's also a time-saver if you update your folder structure

import styles from "./ErrorPage.module.css";

function ErrorPage({ setTitle }) {
	setTitle("Error Page"); // this could use a useEffect() ;)
	return (
		<>
			<div className={styles.errorImage}>
				<img src={errorGif} />
			</div>
		</>
	);
}

export default ErrorPage;
