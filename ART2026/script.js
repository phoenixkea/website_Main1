
const title = document.getElementById("floatingTitle");
const anchor = document.getElementById("anchor");

window.addEventListener("scroll", () => {
  // horizontal follow
  title.style.transform = `translateX(${-window.scrollX}px)`;

  // vertical lock
  const anchorTop = anchor.getBoundingClientRect().top;
  if (anchorTop <= window.innerHeight * 0.38) {
    title.classList.add("locked");
  } else {
    title.classList.remove("locked");
  }
});

