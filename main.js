const renderToDom = (divId, html) => {
  const selectedDiv = docuement.querySelector(divId);
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



///Cards on DOM for projects///
const projects = [
  {
    id: 1,
    title: "Example",
    description: "Example text"
  },
  {
    id: 2,
    title: "Class Presentation",
    description: "Creating a wireframe and slideshow for next weeks presentation",
  },
  {
    id: 3,
    title: "Mobile App Project",
    description: "Creating a mobile app that helps users with keep track of their diet",
  },
];

const cardsOnDom = (projects) => {
  let projectsDomString = ""
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

const form = document.querySelector("form")

const createProject = (e) => {
  e.preventDefault();

  const newProject = {
    id: projects.length + 1,
    title: document.querySelector("#projectTitle").value,
    description: document.querySelector("#projectDescription").value,
  }
  projects.push(newProject);
  cardsOnDom(projects);
  form.reset();
};

form.addEventListener("submit", createProject);


const project = document.querySelector("#projects");

project.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const[ , id] = e.target.id.split("--");

    const index = projects.findIndex(e => e.id === Number(id));

    projects.splice(index, 1);
    cardsOnDom(projects);
  }
});

const startApp = () => {
  cardsOnDom(projects)
};



///Cards on DOM for packages///
const packages = [
  {
    id: 4,
    packageTitle: "docker",
    packageDescription: "A software platform used for building applications based on containers small and lightweight execution environments.",
  },
  {
    id: 5,
    packageTitle: "Apache Maven",
    packageDescription: "A default package manager used for the Java programming language and the Java runtime environment.",
  },
  {
   id: 6,
   packageTitle: "NuGet",
   packageDescription: "A free and open source package manager used for the Microsoft development platforms including .NET.",
  },
  {
    id: 7,
    packageTitle: "RubyGems",
    packageDescription: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
  },
  {
    id: 8,
    packageTitle: "npm",
    packageDescription: "A package manager for JavaScript, included with Node.js npm makes it easy foir developers to share and reuse code."
  },
  {
    id: 9,
    packageTitle: "Containers",
    packageDescription: "A single place for your team to manage Docker images and decide who can see and access your images.",
  },
];

const packagesCardsOnDom = (packages) => {
  let packagesDomString = ""
  for (const package of packages) {
    packagesDomString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${package.title}</h5>
      <p class="card-text">${package.description}</p>
      <button class="btn-danger-btn" id="delete--${package.id}" background-color="red">Delete</button>
    </div>
  </div>`;
  }
  renderToDom("#packages", packagesDomString);
};

const packageForm = document.querySelector("form")

const createPackage = (e) => {
  e.preventDefault();

  const newPackage = {
    id: projects.length + 1,
    title: document.querySelector("#packageTitle").value,
    description: document.querySelector("#packageDescription").value,
  }
  projects.push(newPackage);
  packagesCardsOnDom(packages);
  form.reset();
};

form.addEventListener("submit", createPackage);


const package = document.querySelector("#package");
package.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const[ , id] = e.target.id.split("--");

    const index = packages.findIndex(e => e.id === Number(id));

    packages.splice(index, 1);
    packagesCardsOnDom(packages);
  }
});


///Cards on DOM for Repos///
const repos = [
  {
    id: 10,
    reposTitle: "greys-anatomy-lorem-ipsum-generator",
    reposDescription: "A lorem ipsum generator with medical terms and words from the show Grey's Anatomy.",
  },
  {
    id: 11,
    reposTitle: "how-many-days-until",
    reposDescription: "A React countdown app of days between today and next year.",
  },
  {
    id: 12,
    reposTitle: "httriri",
    reposDescription: "HTTRIRI - HTTP Status Codes as Portrayed by Rihanna GIF's",
  },
  {
    id: 13,
    reposTitle: "ambition-fund-website",
    reposDescription: "Website for www.ambitionfund.org, micro-grant program to provide support for underrepresented people who need financial assistance pursuing professional development opportunities in the technology...",
  },
];

const reposCardsOnDom = (repos) => {
  let reposDomString = ""
  for (const repo of repos) {
    reposDomString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${repo.title}</h5>
      <p class="card-text">${repo.description}</p>
      <button class="btn-danger-btn" id="delete--${repo.id}" background-color="red">Delete</button>
    </div>
  </div>`;
  }
  renderToDom("#repos", reposDomString);
};

const repoForm = document.querySelector("form")

const createRepo = (e) => {
  e.preventDefault();

  const newRepo = {
    id: repos.length + 1,
    title: document.querySelector("#repoTitle").value,
    description: document.querySelector("#repoDescription").value,
  }
  repos.push(newRepo);
  packagesCardsOnDom(repos);
  form.reset();
};

form.addEventListener("submit", createRepo);


const repo = document.querySelector("#repos");

repo.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const[ , id] = e.target.id.split("--");

    const index = repos.findIndex(e => e.id === Number(id));

    repos.splice(index, 1);
    reposCardsOnDom(repos);
  }
});

startApp();
