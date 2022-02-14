// Rendezhető táblázat Adott egy táblázat az oldalon. JavaScript segítségével tedd lehetővé, hogy az oszlopok fejlécére kattintva a táblázat az adott oszlop szerint rendezve jelenjen meg!

// 1. megoldás:
// const table = document.querySelector("table");
// const thead = table.querySelector("thead");
// const tbody = table.querySelector("tbody");

// const sortTable = (event) => {
//   console.log(event.target.tagName);
//   if (event.target.tagName !== "TH") return;

//   const clickedItem = event.target;
//   const headers = Array.from(event.target.parentNode.children);
//   const colIndex = headers.indexOf(clickedItem);
//   console.log(colIndex);

//   const compare = (a, b) => {
//     const aCellText = a.children[colIndex].innerText;
//     const bCellText = b.children[colIndex].innerText;
//     if (aCellText < bCellText) return -1;
//     if (aCellText > bCellText) return 1;
//     return 0;
//   };

//   const sortedChildren = Array.from(tbody.children).sort(compare);
//   tbody.innerHTML = "";
//   sortedChildren.forEach((row) => tbody.appendChild(row));

//   return "alma";
// };

// // function sortTable () {}
// // const sortTable = function () {}

// thead.addEventListener("click", sortTable);

class SortableTable {
  constructor(table) {
    this.table = table;
    this.thead = table.querySelector("thead");
    this.tbody = table.querySelector("tbody");

    // this.sortTable = this.sortTable.bind(this);
    this.thead.addEventListener("click", this.sortTable);
  }

  sortTable = (event) => {
    // sortTable(event) {
    console.log(event.target.tagName);
    if (event.target.tagName !== "TH") return;

    const clickedItem = event.target;
    const headers = Array.from(event.target.parentNode.children);
    const colIndex = headers.indexOf(clickedItem);
    console.log(colIndex);

    const compare = (a, b) => {
      const aCellText = a.children[colIndex].innerText;
      const bCellText = b.children[colIndex].innerText;
      if (aCellText < bCellText) return -1;
      if (aCellText > bCellText) return 1;
      return 0;
    };

    const sortedChildren = Array.from(this.tbody.children).sort(compare);
    this.tbody.innerHTML = "";
    sortedChildren.forEach((row) => this.tbody.appendChild(row));
  };
}
new SortableTable(document.querySelector("table"));
