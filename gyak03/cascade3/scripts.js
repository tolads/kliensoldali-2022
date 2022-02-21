/* WebComponents
  - custom elements
  - shadow DOM
  - template
*/
// Kaszkád legördülők Adott egy legördülő menü, benne az opciók csoportosítva. Alakítsd át ezt úgy, hogy két legördülő legyen: az elsőben a csoportok neve, majd abból választva a másodikban a csoporton belüli opciók jelenjenek meg!
class Cascade extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("connected");
    console.log(this);
    this.origSelect = this.shadowRoot.host.querySelector("select");
    this.collect();
    this.updateDOM();
  }

  disconnectedCallback() {
    console.log("disconnected");
  }

  collect = () => {
    this.items = new Map();
    this.origSelect.querySelectorAll("optgroup").forEach((optgroup) => {
      const options = Array.from(optgroup.querySelectorAll("option")).map(
        // (option) => {
        //   return {
        //     label: option.innerText,
        //     value: option.value,
        //   };
        // }
        (option) => ({
          label: option.innerText,
          value: option.value,
        })
      );
      this.items.set(optgroup.label, options);
    });
    console.log(this.items);
  };

  fillOptions = (key) => {
    this.childSelect.innerHTML = this.items
      .get(key)
      .map(
        (option) => `<option value="${option.value}">${option.label}</option>`
      )
      .join("");
  };

  handleChildChange = () => {
    this.origSelect.value = this.childSelect.value;
  };

  handleChange = (event) => {
    const key = event.target.value;
    this.fillOptions(key);
    this.handleChildChange();
  };

  updateDOM = () => {
    const template = document.querySelector("#cascade-select-template");
    const content = template.content.cloneNode(true);
    this.shadowRoot.appendChild(content);

    // Parent element
    const parent = this.origSelect.parentNode;

    // Create group select
    const groupSelect = this.shadowRoot.querySelector("select.group");
    // const groupSelect = document.createElement("select");
    // this.shadowRoot.appendChild(groupSelect);
    groupSelect.innerHTML = Array.from(this.items.keys())
      .map((groupName) => `<option value="${groupName}">${groupName}</option>`)
      .join("");
    groupSelect.addEventListener("change", this.handleChange);

    // Create child select
    this.childSelect = this.shadowRoot.querySelector("select.child");
    // this.childSelect = document.createElement("select");
    // this.childSelect.name = this.origSelect.name;
    // this.shadowRoot.appendChild(this.childSelect);
    const key = Array.from(this.items.keys())[0];
    this.fillOptions(key);
    this.childSelect.addEventListener("change", this.handleChildChange);

    // parent.removeChild(this.origSelect);
  };
}
// new Cascade(document.querySelector("select[name='pets']"));
// new Cascade(document.querySelector("select[name='pets2']"));

customElements.define("cascade-select", Cascade);
