const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
};

// const sidebarRender = () => {
//  const sidebarDomString = `
// <div label="bio-pic">Testing, testing...</div>
// <div label="bio-name"></div>
// <div label="bio-copy"></div>
// <div label="buttons"></div>
// <div label="stats"></div>
// <div label="contacts"></div>
// <div label="highlights"></div>
// <div label="orgs"></div>
// <div label="sponsors></div>
// `;
//renderToDom("#sidebar", sidebarDomString);
//};

////Project Cards////
const projects = [
  {
    id: 1,
    title: "Example",
    description: "Example text",
  },
  {
    id: 2,
    title: "Class Presentation",
    description:
      "Creating a wireframe and slideshow for next weeks presentation",
  },
  {
    id: 3,
    title: "Mobile App Project",
    description:
      "Creating a mobile app that helps users with keep track of their diet",
  },
];

const cardsOnDom = (projects) => {
  let projectsDomString = "";
  for (const project of projects) {
    projectsDomString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${project.title}</h5>
      <p class="card-text">${project.description}</p>
      <button class="btn-danger-btn" id="delete--${project.id}" background-color="red">Delete</button>
    </div>
  </div>`;
  }
  renderToDom("#projects", projectsDomString);
};

const form = document.querySelector("form");

const createProject = (e) => {
  e.preventDefault();

  const newProject = {
    id: projects.length + 1,
    title: document.querySelector("#title").value,
    description: document.querySelector("#description").value,
  };
  projects.push(newProject);
  cardsOnDom(projects);
  form.reset();
};

form.addEventListener("submit", createProject);

const project = document.querySelector("#projects");

project.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");

    const index = projects.findIndex((e) => e.id === Number(id));

    projects.splice(index, 1);
    cardsOnDom(projects);
  }
});

const startApp = () => {
  cardsOnDom(projects);
};

startApp();
