import "../scss/main.scss";
import Nav from "./components/nav.js";
import "./components/nav.scss";

const app = () => {
  document.getElementById("nav").innerHTML = Nav();
};

// init app

app();
