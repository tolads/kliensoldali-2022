// 1) Landing page – belső linkek A landing page oldalon a navigációs fejlécben lévő belső linkekre kattintva az oldal gördülve menjen az adott helyre.
const links = document.querySelectorAll(".navbar .nav-link");
/*
    links nem tömb hanem töbszerű objektum, tömbbé alakítás ha kell:
    [...links]
    Array.from(links)
*/
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    console.log(href);
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: "smooth" });
    history.pushState(null, null, href);
  });
});

// 2) Landing page – navigáció rögzítése Ha elgördült az oldal 200px-nyit, akkor alkalmazzuk a navbar-scrolled stílusosztályt a nav elemen. Ügyelj arra, hogy a scroll esemény nagyon sokszor hívódik meg!
// function handleScroll() {}
const handleScroll = () => {
  console.log(1);
  const nav = document.querySelector("nav");
  nav.classList.toggle("navbar-scrolled", window.scrollY > 200);
};
// 1. megoldás
// window.addEventListener("scroll", handleScroll);

// 2. megoldás
// let ticking = false;

// document.addEventListener('scroll', () => {
//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//         handleScroll();
//         ticking = false;
//     });

//     ticking = true;
//   }
// });

// 3. megoldás
window.addEventListener("scroll", _.throttle(handleScroll, 50));

// window.setTimeout(() => console.log("fa"), 0);
// console.log("alma");

// 3) Landing page – animáció megjelenéskor Ha egy elem gördítés közben a viewportba ér, akkor valamilyen animáció segítségével jelenjen meg! Az elemeket deklaratívan jelöljük meg HTML5 data attribútumokat használva, pl. data-scroll. Az animáció nevét is eltárolhatod data attribútumban, pl. data-scroll-animation="fadeInUp". Animációhoz használhatod az animate.css könyvtárat. Ügyelj arra, hogy a scroll esemény nagyon sokszor hívódik meg!
const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(
        "animate__animated",
        `animate__${entry.target.dataset.scrollAnimation}`
      );
      console.log("intersecting!");
    } else {
      console.log("not intersecting");
    }
  });
};
const options = { threshold: 0 };
const observer = new IntersectionObserver(handleIntersect, options);
document
  .querySelectorAll("[data-scroll]")
  .forEach((target) => observer.observe(target));

// 4) Landing page – folyamatsáv Helyezz el egy olvasási folyamatsávot az oldal tetején. A gördítés mértéke szerint változzon 0 és 100% között a szélessége!
const progressDiv = document.createElement("div");
progressDiv.id = "progress-bar";
progressDiv.append(document.createElement("div"));
document.body.prepend(progressDiv);
const updateProgressBar = () => {
  const div = document.querySelector("#progress-bar div");
  const maxScroll = document.body.scrollHeight - document.body.clientHeight;
  const ratio = window.scrollY / maxScroll;
  div.style.width = `${ratio * 100}%`;
};

window.addEventListener("scroll", _.throttle(updateProgressBar, 50));
