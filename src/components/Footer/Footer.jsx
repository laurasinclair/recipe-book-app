import styles from "./Footer.module.css";
function Footer() {
  return (
    <>
      <footer className={styles.footerContainer}>
        <p>
          Created by <strong>Sakthi Karunya</strong> |{" "}
          <a
            href="https://github.com/karunya10/recipe-book-app"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
