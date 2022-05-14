import { baseUrl } from "../../api/api.js";
const header = document.getElementById("header");

//////////////
/// Header ///
//////////////

const Header = async () => {
  const heroUrl = baseUrl + "/home";

  try {
    const response = await fetch(heroUrl);
    const json = await response.json();
    header.innerHTML = "";

    header.innerHTML = `
    <img class="hero-img" src="${baseUrl}${json.hero_banner.url}" alt="${json.hero_banner_alt_text}" />
    <a class="hero-container" href="./all-products.html"><div>
      <h4>
        All shoes are tested and approved by professional athletes.
        <br/>
        See all shoes
        <i class="fa-solid fa-arrow-right-long"></i>
      </h4>
    </div>
    </a>
    `;

    return;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default Header;
