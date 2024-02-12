const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
};

//sidebar

//Pinned Repo Data//
const pinnedRepos = [
  {
    id: 1,
    title: "gatsby-workshop",
    bio: "This workshop covers the fundamentals of developing fast, accessible sites with Gatsby, a React framework, and dive deep into the building blocks you'll need to build your own custom Gatsby sites.",
    bottomText: ["Javascript", 38, 8],
  },

  {
    id: 2,
    title: "getting-started-with-open-source",
    bio: "This is a presentation on Getting Started With Open Source",
    bottomText: ["JavaScript", 6],
  },

  {
    id: 3,
    title: "Rebuild-Black-Business/RBB-Website",
    bio: "Website to help connect black-owned businesses with consumers and resources",
    bottomText: ["JavaScript", 99, 75],
  },

  {
    id: 4,
    title: "React-Ladies",
    bio: "We're a group of women and non-binary ReactJS enthusiasts in New York City (and beyond).",
    bottomText: ["JavaScript", 99, 26],
  },

  {
    id: 5,
    title: "httriri",
    bio: "HTTRiRi - HTTP Status Codes as Portrayed by Rihanna GIFS",
    bottomText: ["TypeScript", 37, 22],
  },

  {
    id: 6,
    title: "affirmation_generator",
    bio: "A random generator written with ReactJS :-)",
    bottomText: ["JavaScript", 52, 32],
  },
];

//render pinned repos
const pinnedRepoRender = (pinnedRepos) => {
  let pinnedString = "";
  pinnedRepos.forEach((item) => {
    pinnedString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.bio}</p>
      <p class="card-link">${item.bottomText[0]}</p>
      <p class="card-link">${item.bottomText[1]}</p>
      <p class="card-link">${item.bottomText[2]}</p>
    </div>
  </div>
    `;
  });
  renderToDom("pinned-repos", pinnedString);
};

//render project form

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

form.addEventListener("form-submit", createProject);

const project = document.querySelector("#projects");

project.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");

    const index = projects.findIndex((e) => e.id === Number(id));

    projects.splice(index, 1);
    cardsOnDom(projects);
  }
});

///Cards on DOM for packages///
const packages = [
  {
    id: 4,
    packageTitle: "docker",
    packageDescription:
      "A software platform used for building applications based on containers small and lightweight execution environments.",
  },
  {
    id: 5,
    packageTitle: "Apache Maven",
    packageDescription:
      "A default package manager used for the Java programming language and the Java runtime environment.",
  },
  {
    id: 6,
    packageTitle: "NuGet",
    packageDescription:
      "A free and open source package manager used for the Microsoft development platforms including .NET.",
  },
  {
    id: 7,
    packageTitle: "RubyGems",
    packageDescription:
      "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
  },
  {
    id: 8,
    packageTitle: "npm",
    packageDescription:
      "A package manager for JavaScript, included with Node.js npm makes it easy foir developers to share and reuse code.",
  },
  {
    id: 9,
    packageTitle: "Containers",
    packageDescription:
      "A single place for your team to manage Docker images and decide who can see and access your images.",
  },
];

const packagesCardsOnDom = (packages) => {
  let packagesDomString = "";
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

const packageForm = document.querySelector("form");

const createPackage = (e) => {
  e.preventDefault();

  const newPackage = {
    id: projects.length + 1,
    title: document.querySelector("#packageTitle").value,
    description: document.querySelector("#packageDescription").value,
  };
  projects.push(newPackage);
  packagesCardsOnDom(packages);
  form.reset();
};

form.addEventListener("submit", createPackage);

const package = document.querySelector("#package");
package.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");

    const index = packages.findIndex((e) => e.id === Number(id));

    packages.splice(index, 1);
    packagesCardsOnDom(packages);
  }
});

///Cards on DOM for Repos///
const repos = [
  {
    id: 10,
    reposTitle: "greys-anatomy-lorem-ipsum-generator",
    reposDescription:
      "A lorem ipsum generator with medical terms and words from the show Grey's Anatomy.",
  },
  {
    id: 11,
    reposTitle: "how-many-days-until",
    reposDescription:
      "A React countdown app of days between today and next year.",
  },
  {
    id: 12,
    reposTitle: "httriri",
    reposDescription:
      "HTTRIRI - HTTP Status Codes as Portrayed by Rihanna GIF's",
  },
  {
    id: 13,
    reposTitle: "ambition-fund-website",
    reposDescription:
      "Website for www.ambitionfund.org, micro-grant program to provide support for underrepresented people who need financial assistance pursuing professional development opportunities in the technology...",
  },
];

const reposCardsOnDom = (repos) => {
  let reposDomString = "";
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

const repoForm = document.querySelector("form");

const createRepo = (e) => {
  e.preventDefault();

  const newRepo = {
    id: repos.length + 1,
    title: document.querySelector("#repoTitle").value,
    description: document.querySelector("#repoDescription").value,
  };
  repos.push(newRepo);
  packagesCardsOnDom(repos);
  form.reset();
};

form.addEventListener("submit", createRepo);

const repo = document.querySelector("#repos");

repo.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");

    const index = repos.findIndex((e) => e.id === Number(id));

    repos.splice(index, 1);
    reposCardsOnDom(repos);
  }
});

const startApp = () => {
  pinnedRepoRender(pinnedRepos);
  cardsOnDom(projects);
  packagesCardsOnDom(packages);
};

startApp();
