import errorGif from "../../../assets/Error404.gif";

import styles from "./ErrorPage.module.css";

function ErrorPage({ setTitle }) {
  setTitle("Error Page");
  return (
    <>
      <div className={styles.errorImage}>
        <img src={errorGif} />
      </div>
    </>
  );
}

export default ErrorPage;
