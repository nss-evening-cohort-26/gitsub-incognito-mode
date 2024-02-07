const renderToDom = (divId, html) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = html;
  };
  
  // const sidebarRender = () => {
  //   const sidebarDomString = `
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
  //   renderToDom("#sidebar", sidebarDomString);
  // };
