import { Link } from "react-router-dom";
import "./about.css";
function About({ setTitle }) {
  setTitle("About the Project");
  return (
    <>
      <div class="about-container">
        <h1>About This Recipe Book</h1>
        <p class="intro">
          Welcome to my personal recipe collection! This book is a growing
          archive of recipes I’ve curated and perfected over the years—from
          traditional favorites to exciting new experiments in the kitchen.
        </p>

        <h2>Why I Created This</h2>
        <p class="purpose">
          I wanted a single place to keep all my recipes neatly organized,
          searchable, and easy to update. This project started as a simple hobby
          but has grown into a full-fledged app!
        </p>
        <h2>Credits & Links</h2>
        <p class="credits">
          Curated with ❤️ by Sakthi
          <br />
          <a
            href="https://github.com/karunya10/recipe-book-app"
            target="_blank"
            class="github-link"
          >
            GitHub Repository
          </a>
        </p>

        <Link to="/">
          <button className="homeBtn">Home</button>
        </Link>
      </div>
    </>
  );
}
export default About;
