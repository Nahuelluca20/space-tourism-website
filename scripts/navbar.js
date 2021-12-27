class Nav extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const getAttribute = this.getAttribute("active");
    let home = "";
    let destination = "";
    let crew = "";
    let technology = "";

    if (getAttribute === "home") {
      home = "home";
      destination = "";
      crew = "";
      technology = "";
    } else if (getAttribute === "destination") {
      home = "";
      destination = "destination";
      crew = "";
      technology = "";
    } else if (getAttribute === "crew") {
      home = "";
      destination = "";
      crew = "crew";
      technology = "";
    } else if (getAttribute === "technology") {
      home = "";
      destination = "";
      crew = "";
      technology = "technology";
    }
    this.innerHTML = `
    <header class="primary-header flex">
    <div>
      <img src="/assets/shared/logo.svg" class="logo-nav" />
    </div>

    <button
      class="mobile-nav-toggle"
      aria-controls="primary-navigation"
      aria-expanded="false"
    >
      <span class="sr-only"></span>
    </button>

    <nav id="navbar">
      <ul class="ul-nav flex" id="primary-navigation" data-visible="false">
        <li class="nav-li" active="${home}">
          <a href="/index.html" class="a-nav"> <span class="nav-span" aria-hidden="true">00</span>HOME</a>
        </li>
        <li class="nav-li" active="${destination}">
          <a href="./destination-moon.html" class="a-nav">
            <span class="nav-span" aria-hidden="true">01</span>DESTINATION</a
          >
        </li>
        <li class="nav-li" active="${crew}">
          <a href="./crew-commander.html" class="a-nav"> <span class="nav-span" aria-hidden="true">02</span>CREW </a>
        </li>
        <li class="nav-li" active="${technology}">
          <a href="" class="a-nav">
            <span class="nav-span" aria-hidden="true">03</span>TECHNOLOGY</a
          >
        </li>
      </ul>
    </nav>
    <!-- <img src="/assets/shared/icon-hamburger.svg" width="24px" height="21px" id="bt-nav" /> -->
  </header>
    `;

    const primaryNav = document.querySelector(".ul-nav");
    const navToggle = document.querySelector(".mobile-nav-toggle");

    navToggle.addEventListener("click", () => {
      const visibility = primaryNav.getAttribute("data-visible");

      if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
      } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
      }
    });
  }
}

window.customElements.define("my-navigation", Nav);
