class TechSelector extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const vehicle = this.getAttribute("vehicle");
    const spaceport = this.getAttribute("spaceport");
    const capsule = this.getAttribute("capsule");
    this.innerHTML = `
    <div class="selector">
      <div class="selector-container">
        <a href="technology-vehicle.html" active="${vehicle}"> 1 </a>
        <a href="technology-spaceport.html" active="${spaceport}"> 2 </a>
        <a href="technology-capsule.html" active="${capsule}"> 3 </a>
      </div>
    </div>
    `;
  }
}

window.customElements.define("tech-selector", TechSelector);