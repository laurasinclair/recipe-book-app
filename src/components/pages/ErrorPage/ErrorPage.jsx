import errorGif from "../../../assets/Error404.gif";

import "./errorPage.css";

function ErrorPage({ setTitle }) {
  setTitle("Error Page");
  return (
    <>
      <div className="errorImage">
        <img src={errorGif} />
      </div>
    </>
  );
}

export default ErrorPage;
