class Nav extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const getAttributeHome = this.getAttribute("home");
    const getAttributeDestination = this.getAttribute("destination");
    const getAttributeCrew = this.getAttribute("crew");
    const getAttributeTech = this.getAttribute("technology");

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
        <li class="nav-li" active="${getAttributeHome}">
          <a href="/index.html" class="a-nav"> <span class="nav-span" aria-hidden="true">00</span>HOME</a>
        </li>
        <li class="nav-li" active="${getAttributeDestination}">
          <a href="./destination-moon.html" class="a-nav">
            <span class="nav-span" aria-hidden="true">01</span>DESTINATION</a
          >
        </li>
        <li class="nav-li" active="${getAttributeCrew}">
          <a href="./crew-commander.html" class="a-nav"> <span class="nav-span" aria-hidden="true">02</span>CREW </a>
        </li>
        <li class="nav-li" active="${getAttributeTech}">
          <a href="./technology-vehicle.html" class="a-nav">
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
