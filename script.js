const id = (id) => { return document.getElementById(id) }
const toggle = () => {
    id("menu").classList.toggle("none");
    id("hero").children[0].classList.toggle("none");
    id("hero").children[1].classList.toggle("none"); 
}
if (window.innerWidth < 720 && id("menu").className !== "none") {
  id("menu").classList.add("none");
}
if (id("menu").className === "none" && window.innerWidth > 720) {
  id("menu").classList.remove("none");
}
id("burger").onclick = () => {
    toggle()
};
window.addEventListener('resize', () => {
    if (window.innerWidth > 720 && id("menu").className === 'none') {
      id("menu").classList.remove("none");
    }
    if (window.innerWidth < 720 && id("menu").className !== "none") {
        id("menu").classList.add("none");
        id("hero").children[0].classList.remove("none");
        id("hero").children[1].classList.remove("none"); 
    }
})