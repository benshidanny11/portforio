document.getElementById("menu-btn").addEventListener("click", function () {
  let menuList = document.getElementById("menu-list");
  menuList.classList.remove("show-menu");
});
var menus = document.getElementsByClassName("hide-menu");
console.log(menus);
var menuarray = Array.prototype.map.call(menus, function (element) {
  return element;
});
menuarray.forEach((element) => {
  element.addEventListener("click", function () {
    let menuList = document.getElementById("menu-list");
    menuList.classList.add("show-menu");
  });
});

let projects = [
  {
    name: "Tonic",
    featuredImage: "assets/project1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, amet ab fugiat et tempora commodi libero obcaecati odio consequuntur ex id voluptate ratione dolores similique ad aspernatur, officia, beatae doloribus repellendus laboriosam voluptatibus maxime. Dolorum exercitationem in enim alias praesentium iure unde inventore! Cumque debitis quo similique, accusantium hic suscipit?",
    technologies: ["HTML", "CSS", "Javascript"],
    projectScope: ["Canopy", "Back end dev", "2015"],
    projectSumary:
      "    Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    liveLink: "https://benshidanny11.github.io/portforio/home.html",
    codeLink: "https://github.com/benshidanny11/portforio",
  },
  {
    name: "Multi-post stories",
    featuredImage: "assets/project2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, amet ab fugiat et tempora commodi libero obcaecati odio consequuntur ex id voluptate ratione dolores similique ad aspernatur, officia, beatae doloribus repellendus laboriosam voluptatibus maxime. Dolorum exercitationem in enim alias praesentium iure unde inventore! Cumque debitis quo similique, accusantium hic suscipit?",
    projectSumary:
      " A daily selection of privately personalized reads, no accounts or sign up required.",
    technologies: ["HTML", "Ruby", "CSS", "Javascript"],
    projectScope: ["Facebook", "Full stack dev", "2015"],
    liveLink: "https://benshidanny11.github.io/portforio/home.html",
    codeLink: "https://github.com/benshidanny11/portforio",
  },
  {
    name: "Facebook 360",
    featuredImage: "assets/project3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, amet ab fugiat et tempora commodi libero obcaecati odio consequuntur ex id voluptate ratione dolores similique ad aspernatur, officia, beatae doloribus repellendus laboriosam voluptatibus maxime. Dolorum exercitationem in enim alias praesentium iure unde inventore! Cumque debitis quo similique, accusantium hic suscipit?",
    technologies: ["HTML", "CSS", "Javascript"],
    projectScope: ["Facebook", "Full stack dev", "2015"],
    projectSumary:
      "    Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    liveLink: "https://benshidanny11.github.io/portforio/home.html",
    codeLink: "https://github.com/benshidanny11/portforio",
  },
  {
    name: "Uber Navigation",
    featuredImage: "assets/project4.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, amet ab fugiat et tempora commodi libero obcaecati odio consequuntur ex id voluptate ratione dolores similique ad aspernatur, officia, beatae doloribus repellendus laboriosam voluptatibus maxime. Dolorum exercitationem in enim alias praesentium iure unde inventore! Cumque debitis quo similique, accusantium hic suscipit?",
    technologies: ["HTML", "CSS", "Javascript"],
    projectScope: ["Uber", "Lead developer", "2018"],
    projectSumary:
      " A smart assistant to make driving more safe, efficient, and funby unlocking your most expensive computer: your car.",
    liveLink: "https://benshidanny11.github.io/portforio/home.html",
    codeLink: "https://github.com/benshidanny11/portforio",
  },
];

var projectContainer=document.getElementById("projects-container");

projects.forEach((project) => {

  let sectionProjectContainer=document.createElement("section");
  sectionProjectContainer.classList.add(...["innerworkcontainer","mt-4"])

  let workdiv = document.createElement("div");
  workdiv.classList.add(...["work", "project-1"]);

  let projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

  let projectImg = document.createElement("img");
  projectImg.src = project.featuredImage;
  projectDiv.appendChild(projectImg);

  let descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("description");

  let titleH1 = document.createElement("h1");
  titleH1.innerHTML = project.name;

  let companyDetailsList = document.createElement("ul");
  companyDetailsList.classList.add("company");

  let companyDelailsItem1 = document.createElement("li");
  companyDelailsItem1.classList.add(...["item", "item1"]);

  let companyDelailsItem1H3 = document.createElement("h3");
  companyDelailsItem1H3.innerHTML = project.projectScope[0];
  companyDelailsItem1.appendChild(companyDelailsItem1H3);

  let companyDelailsItem2 = document.createElement("li");
  companyDelailsItem2.classList.add(...["item", "item2"]);

  let companyDelailsItem2H3 = document.createElement("h3");
  companyDelailsItem2H3.innerHTML = project.projectScope[1];
  companyDelailsItem2.appendChild(companyDelailsItem2H3);

  let companyDelailsItem3 = document.createElement("li");
  companyDelailsItem3.classList.add(...["item", "item3","item-mar-left"]);

  let companyDelailsItem3H3 = document.createElement("h3");
  companyDelailsItem3H3.innerHTML = project.projectScope[2];
  companyDelailsItem3.appendChild(companyDelailsItem3H3);

  companyDetailsList.appendChild(companyDelailsItem1);
  companyDetailsList.appendChild(companyDelailsItem2);
  companyDetailsList.appendChild(companyDelailsItem3);

  let toolsList = document.createElement("ul");
  toolsList.classList.add("tools");

  let toolsItem1 = document.createElement("li");
  toolsItem1.classList.add(...["item", "item1"]);
  toolsItem1.innerHTML = project.technologies[0];

  let toolsItem2 = document.createElement("li");
  toolsItem2.classList.add(...["item", "item2"]);
  toolsItem2.innerHTML = project.technologies[1];

  let toolsItem3 = document.createElement("li");
  toolsItem3.classList.add(...["item", "item1","item-mar-left"]);
  toolsItem3.innerHTML = project.technologies[2];

  toolsList.appendChild(toolsItem1);
  toolsList.appendChild(toolsItem2);
  toolsList.appendChild(toolsItem3);
  
  let projectSumaryParagraph=document.createElement("p");
  projectSumaryParagraph.innerHTML=project.projectSumary;

  let projectDetailsButtonDiv=document.createElement("div");

  let projectDetailsButton=document.createElement("a");
  projectDetailsButton.classList.add(...["btn","btn-resume","mt-4"]);
  projectDetailsButton.innerHTML="Se the project";
  projectDetailsButtonDiv.appendChild(projectDetailsButton);
  

  descriptionDiv.appendChild(titleH1);
  descriptionDiv.appendChild(companyDetailsList);
  descriptionDiv.appendChild(toolsList);
  descriptionDiv.appendChild(projectSumaryParagraph);
  descriptionDiv.appendChild(projectDetailsButtonDiv);

  workdiv.appendChild(projectDiv);
  workdiv.appendChild(descriptionDiv);
 
  sectionProjectContainer.appendChild(workdiv);

 projectContainer.appendChild(sectionProjectContainer);

});