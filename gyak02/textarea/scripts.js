/*
  Feladat:
  Készíts olyan textarea mezőt, amely alatt fel van
  tüntetve, hogy eddig hány karaktert írtunk be.

  - készíts egy TextareaWithCounter osztályt
  - konstruktorparaméterben várjon egy <textarea /> elemet
  - az osztályt példányosítsd a DOM-ban található összes
    <textarea /> elemre
  - hozz létre egy <div /> elemet
  - a <div /> elem tartalmát állítsd be a html fájlban
    levő komment alapján
  - a <div /> elemet szúrd be közvetlenül a <textarea /> elem után,
    használható az `.insertBefore()` művelet,
    egy elem rákövetkező testvére lekérhető a
    `.nextSibling` tulajdonsággal
  - hozz létre egy `updateCounter` eseménykezelőt,
    mely a <textarea /> elem "input" eseményére hívódik meg,
    és átállítja a <span /> elemben levő számlálót,
    <textarea /> értékének hossza lekérhető így: `.value.length`
*/
class TextareaWithCounter {
  constructor(textarea) {
    this.textarea = textarea;
    const div = document.createElement("div");
    div.innerHTML = "Karakterek száma: <span></span>";
    textarea.parentNode.insertBefore(div, textarea.nextSibling);
    this.span = div.querySelector("span");

    this.updateCounter();
    textarea.addEventListener("input", this.updateCounter);
  }

  updateCounter = () => {
    this.span.innerHTML = this.textarea.value.length;
  };
}

const textareas = document.querySelectorAll("textarea");
textareas.forEach((textarea) => new TextareaWithCounter(textarea));
