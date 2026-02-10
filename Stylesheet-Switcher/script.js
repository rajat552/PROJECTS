const items = document.querySelectorAll('li');
const theme = document.querySelector('#theme');

items[0].addEventListener("click", () => theme.href = "Stylesheet 1.css");
items[1].addEventListener("click", () => theme.href = "Stylesheet 2.css");
items[2].addEventListener("click", () => theme.href = "Stylesheet 3.css");
items[3].addEventListener("click", () => theme.href = "Stylesheet 4.css");
items[4].addEventListener("click", () => theme.href = "");

// const theme = document.getElementById("theme");
const links = document.querySelectorAll(".style-link");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        theme.href = this.dataset.style;
    });
});
