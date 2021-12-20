class Selector extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="selector">
          <ul class="destination-list">
            <li class="destination-item" aria-active="true" id="moon">
              <a href="destination-moon.html">MOON</a>
            </li>
            <li class="destination-item" aria-active="false" id="mars">
              <a href="destination-mars.html">MARS</a>
            </li>
            <li class="destination-item" aria-active="false" id="europa">
              <a href="destination-europa.html">EUROPA</a>
            </li>
            <li class="destination-item" aria-active="false" id="titan">
              <a href="destination-titan.html">TITAN</a>
            </li>
          </ul>
        </div>
    `;
    const moon = document.getElementById("moon");
    const mars = document.getElementById("mars");
    const europa = document.getElementById("europa");
    const titan = document.getElementById("titan");

    const title = document.getElementById("destination-title");
    const titleValue = title.firstChild.nodeValue;
    if (titleValue === "MOON") {
      moon.setAttribute("aria-active", true);
      mars.setAttribute("aria-active", false);
      europa.setAttribute("aria-active", false);
      titan.setAttribute("aria-active", false);
    } else if (titleValue === "MARS") {
      moon.setAttribute("aria-active", false);
      mars.setAttribute("aria-active", true);
      europa.setAttribute("aria-active", false);
      titan.setAttribute("aria-active", false);
    } else if (titleValue === "EUROPA") {
      moon.setAttribute("aria-active", false);
      mars.setAttribute("aria-active", false);
      europa.setAttribute("aria-active", true);
      titan.setAttribute("aria-active", false);
    } else if (titleValue === "TITAN") {
      moon.setAttribute("aria-active", false);
      mars.setAttribute("aria-active", false);
      europa.setAttribute("aria-active", false);
      titan.setAttribute("aria-active", true);
    }
  }
}

window.customElements.define("destination-selector", Selector);
