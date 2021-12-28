class Selector extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const moon = this.getAttribute("moon");
    const mars = this.getAttribute("mars");
    const europa = this.getAttribute("europa");
    const titan = this.getAttribute("titan");
    this.innerHTML = `
    <div class="selector">
          <ul class="destination-list">
            <li class="destination-item" active="${moon}" id="moon">
              <a href="destination-moon.html">MOON</a>
            </li>
            <li class="destination-item" active="${mars}" id="mars">
              <a href="destination-mars.html">MARS</a>
            </li>
            <li class="destination-item" active="${europa}" id="europa">
              <a href="destination-europa.html">EUROPA</a>
            </li>
            <li class="destination-item" active="${titan}" id="titan">
              <a href="destination-titan.html">TITAN</a>
            </li>
          </ul>
        </div>
    `;
  }
}

window.customElements.define("destination-selector", Selector);
