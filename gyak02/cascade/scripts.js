// Kaszkád legördülők Adott egy legördülő menü, benne az opciók csoportosítva. Alakítsd át ezt úgy, hogy két legördülő legyen: az elsőben a csoportok neve, majd abból választva a másodikban a csoporton belüli opciók jelenjenek meg!
class Cascade {
  constructor(origSelect) {
    this.origSelect = origSelect;
    this.collect();
    this.updateDOM();
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

  handleChange = (event) => {
    const key = event.target.value;
    this.fillOptions(key);
  };

  updateDOM = () => {
    // Parent element
    const parent = this.origSelect.parentNode;

    // Create group select
    const groupSelect = document.createElement("select");
    parent.insertBefore(groupSelect, this.origSelect);
    groupSelect.innerHTML = Array.from(this.items.keys())
      .map((groupName) => `<option value="${groupName}">${groupName}</option>`)
      .join("");
    groupSelect.addEventListener("change", this.handleChange);

    // Create child select
    this.childSelect = document.createElement("select");
    this.childSelect.name = this.origSelect.name;
    parent.insertBefore(this.childSelect, this.origSelect);
    const key = Array.from(this.items.keys())[0];
    this.fillOptions(key);

    parent.removeChild(this.origSelect);
  };
}
new Cascade(document.querySelector("select[name='pets']"));
