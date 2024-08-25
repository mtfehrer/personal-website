let projectsDiv = document.getElementById("projects-container");
let bottomDiv = document.getElementById("bottom-container");

projects = [
    {
        title: "Tower Defense Game",
        description: "Built with React and Typescript",
        link: "https://github.com/mtfehrer/tower-defense-game-react",
        image: "./img/tower defense.gif",
        alt: "tower defense game",
    },
    {
        title: "2D Shooter Game",
        description: "Developed with the pygame engine in python",
        link: "https://github.com/mtfehrer/the-shooter",
        image: "./img/shooter game.gif",
        alt: "2D Shooter Game",
    },
    {
        title: "Forum Website",
        description: "Built with the MERN stack",
        link: "https://github.com/mtfehrer/forum-react",
        image: "./img/forum site.png",
        alt: "forum website",
    },
    {
        title: "Pokemon Battle",
        description: "Created using the curses module in python",
        link: "https://github.com/mtfehrer/pokemon-battle",
        image: "./img/simple pokemon.gif",
        alt: "pokemon game",
    },
    {
        title: "FPS Game",
        description: "Coded using the ursina module in python",
        link: "https://github.com/mtfehrer/fps-game",
        image: "./img/fps game.gif",
        alt: "fps game",
    },
    {
        title: "Sniper Game",
        description: "Developed with the pygame engine in python",
        link: "https://github.com/mtfehrer/the-sniper",
        image: "./img/sniper game.gif",
        alt: "sniper game",
    },
    {
        title: "Maze Game",
        description: "Programmed with the pygame engine in python",
        link: "https://github.com/mtfehrer/the-maze",
        image: "./img/maze game.gif",
        alt: "maze game",
    },
];

for (let p of projects) {
    let projectDiv = document.createElement("div");
    projectDiv.className = "project-container";
    projectTitleDiv = document.createElement("div");
    projectTitleDiv.className = "project-title-container";
    title = document.createElement("h1");
    title.className = "title";
    title.innerText = p.title;
    link = document.createElement("a");
    link.setAttribute("href", p.link);
    link.className = "external-link";
    image = document.createElement("img");
    image.setAttribute("src", p.image);
    image.setAttribute("alt", p.alt);
    image.className = "project-image";
    description = document.createElement("span");
    description.innerText = p.description;
    description.className = "description";
    projectDiv.appendChild(projectTitleDiv);
    projectDiv.appendChild(title);
    projectDiv.appendChild(link);
    projectDiv.appendChild(image);
    projectDiv.appendChild(description);
    projectsDiv.insertBefore(projectDiv, bottomDiv);
}
