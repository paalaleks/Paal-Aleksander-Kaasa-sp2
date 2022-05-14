import "../scss/global.scss";
import "./components/header/header.scss";
import "./components/nav/nav.scss";
import Nav from "./components/nav/nav.js";
import Header from "./components/header/header.js";

const app = () => {
  document.getElementById("nav").innerHTML = Nav();
  document.getElementById("header").innerHTML = Header();
};

// init app

app();
