// Dialógusablak Készíts egy komponenst, amely egy gombot generál, amelyre kattintva egy dialógusablak jelenik meg. Legyen lehetőség egyedi tartalmat a dialógusablakba tenni.
class CustomDialog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = document.querySelector("#custom-dialog-template");
    const content = template.content.cloneNode(true);
    this.shadowRoot.appendChild(content);

    const button = this.shadowRoot.querySelector("button");
    button.addEventListener("click", this.show);

    document.addEventListener("keydown", this.handleKeyDown);
  }

  disconnectedCallback() {
    console.log("disconnected");
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  show = () => {
    console.log("show");
    const dialog = this.shadowRoot.querySelector(".dialog-container");
    dialog.classList.add("show");
  };

  hide = () => {
    const dialog = this.shadowRoot.querySelector(".dialog-container");
    dialog.classList.remove("show");
  };

  handleKeyDown = (event) => {
    console.log("keydown");
    if (event.code === "Escape") this.hide();
  };
}

customElements.define("custom-dialog", CustomDialog);
