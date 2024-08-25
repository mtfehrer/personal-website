pages = [
    { name: "Home", link: "./home.html" },
    { name: "Projects", link: "./projects.html" },
    { name: "Experience", link: "./experience.html" },
    { name: "About", link: "./about.html" },
    { name: "Contact", link: "./contact.html" },
];
header = document.createElement("header");
headerTitle = document.createElement("span");
headerTitle.setAttribute("id", "header-title");
headerTitle.innerText = "Michael Fehrer";
sideContentDiv = document.createElement("div");
sideContentDiv.setAttribute("id", "header-side-content");
header.appendChild(headerTitle);
header.appendChild(sideContentDiv);
for (let p of pages) {
    link = document.createElement("a");
    link.setAttribute("href", p.link);
    span = document.createElement("span");
    span.className = "side-content-text";
    span.innerText = p.name;
    link.appendChild(span);
    sideContentDiv.appendChild(link);
}
document.body.prepend(header);

footer = document.createElement("footer");
iconDiv = document.createElement("div");
infoDiv = document.createElement("div");
baseScript = document.getElementById("base-script");
baseScript.prepend(footer);
