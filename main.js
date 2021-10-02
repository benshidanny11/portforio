document.getElementById('menu-btn').addEventListener('click', () => {
  const menuList = document.getElementById('menu-list');
  menuList.style.display = 'flex';
  menuList.style.visibility = 'visible';
});
const menus = document.getElementsByClassName('hide-menu');
const menuarray = Array.prototype.map.call(menus, (element) => element);
menuarray.forEach((element) => {
  element.addEventListener('click', () => {
    const menuList = document.getElementById('menu-list');
    menuList.style.display = 'flex';
    menuList.style.visibility = 'hidden';
  });
});

const projects = [
  {
    name: 'Salax award event',
    featuredImage: 'assets/salax.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, amet ab fugiat et tempora commodi libero obcaecati odio consequuntur ex id voluptate ratione dolores similique ad aspernatur, officia, beatae doloribus repellendus laboriosam voluptatibus maxime. Dolorum exercitationem in enim alias praesentium iure unde inventore! Cumque debitis quo similique, accusantium hic suscipit?',
    technologies: ['HTML', 'CSS', 'Javascript'],
    projectScope: ['Microverse Student', 'Full stack developer', '2021'],
    projectSumary:
      'Historical Salax Awards Series in Rwanda Showbiz since August 2008 organised by Ikirezi Group Ltd is now back to bring happiness again!',
    liveLink: 'https://benshidanny11.github.io/consert_page/',
    codeLink: 'https://github.com/benshidanny11/consert_page',
  },
  {
    name: 'School MIS',
    featuredImage: 'assets/schoolmis.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, amet ab fugiat et tempora commodi libero obcaecati odio consequuntur ex id voluptate ratione dolores similique ad aspernatur, officia, beatae doloribus repellendus laboriosam voluptatibus maxime. Dolorum exercitationem in enim alias praesentium iure unde inventore! Cumque debitis quo similique, accusantium hic suscipit?',
    projectSumary:
      ' A daily selection of privately personalized reads, no accounts or sign up required.',
    technologies: ['Node js', 'CSS', 'React js'],
    projectScope: ['Primary', 'Full stack dev', '2015'],
    liveLink: 'https://schoolmis.herokuapp.com/',
    codeLink: 'https://github.com/benshidanny11/primarymisfrontend',
  },
  {
    name: 'Covid tracker',
    featuredImage: 'assets/covid.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, amet ab fugiat et tempora commodi libero obcaecati odio consequuntur ex id voluptate ratione dolores similique ad aspernatur, officia, beatae doloribus repellendus laboriosam voluptatibus maxime. Dolorum exercitationem in enim alias praesentium iure unde inventore! Cumque debitis quo similique, accusantium hic suscipit?',
    technologies: ['React js', 'CSS', 'Javascript'],
    projectScope: ['Freelancer', 'Full stack dev', '2020'],
    projectSumary:
      '    Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    liveLink: 'https://covid-tracker-by-dannybenshi.herokuapp.com/Rwanda',
    codeLink: 'https://github.com/benshidanny11/covid-tracker/security/dependabot',
  },
  {
    name: 'Todo list',
    featuredImage: 'assets/todo.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, amet ab fugiat et tempora commodi libero obcaecati odio consequuntur ex id voluptate ratione dolores similique ad aspernatur, officia, beatae doloribus repellendus laboriosam voluptatibus maxime. Dolorum exercitationem in enim alias praesentium iure unde inventore! Cumque debitis quo similique, accusantium hic suscipit?',
    technologies: ['HTML', 'CSS', 'Javascript'],
    projectScope: ['Microverse student', 'Lead developer', '2021'],
    projectSumary:
      ' A smart assistant to make driving more safe, efficient, and funby unlocking your most expensive computer: your car.',
    liveLink: 'https://benshidanny11.github.io/todo-list/dist/index.html',
    codeLink: 'https://github.com/benshidanny11/todo-list',
  },
];

const projectContainer = document.getElementById('projects-container');

projects.forEach((project) => {
  const sectionProjectContainer = document.createElement('section');
  sectionProjectContainer.classList.add(...['innerworkcontainer', 'mt-4']);

  const workdiv = document.createElement('div');
  workdiv.classList.add(...['work', 'project-1']);

  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');

  const projectImg = document.createElement('img');
  projectImg.src = project.featuredImage;
  projectImg.width='450'
  projectDiv.appendChild(projectImg);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('description');

  const titleH1 = document.createElement('h1');
  titleH1.innerHTML = project.name;

  const companyDetailsList = document.createElement('ul');
  companyDetailsList.classList.add('company');

  const companyDelailsItem1 = document.createElement('li');
  companyDelailsItem1.classList.add(...['item', 'item1']);

  const companyDelailsItem1H3 = document.createElement('h3');
  // eslint-disable-next-line prefer-destructuring
  companyDelailsItem1H3.innerHTML = project.projectScope[0];
  companyDelailsItem1.appendChild(companyDelailsItem1H3);

  const companyDelailsItem2 = document.createElement('li');
  companyDelailsItem2.classList.add(...['item', 'item2']);

  const companyDelailsItem2H3 = document.createElement('h3');
  // eslint-disable-next-line prefer-destructuring
  companyDelailsItem2H3.innerHTML = project.projectScope[1];
  companyDelailsItem2.appendChild(companyDelailsItem2H3);

  const companyDelailsItem3 = document.createElement('li');
  companyDelailsItem3.classList.add(...['item', 'item3', 'item-mar-left']);

  const companyDelailsItem3H3 = document.createElement('h3');
  // eslint-disable-next-line prefer-destructuring
  companyDelailsItem3H3.innerHTML = project.projectScope[2];
  companyDelailsItem3.appendChild(companyDelailsItem3H3);

  companyDetailsList.appendChild(companyDelailsItem1);
  companyDetailsList.appendChild(companyDelailsItem2);
  companyDetailsList.appendChild(companyDelailsItem3);

  const toolsList = document.createElement('ul');
  toolsList.classList.add('tools');

  const toolsItem1 = document.createElement('li');
  toolsItem1.classList.add(...['item', 'item1']);
  // eslint-disable-next-line prefer-destructuring
  toolsItem1.innerHTML = project.technologies[0];

  const toolsItem2 = document.createElement('li');
  toolsItem2.classList.add(...['item', 'item2']);
  // eslint-disable-next-line prefer-destructuring
  toolsItem2.innerHTML = project.technologies[1];

  const toolsItem3 = document.createElement('li');
  toolsItem3.classList.add(...['item', 'item1', 'item-mar-left']);
  // eslint-disable-next-line prefer-destructuring
  toolsItem3.innerHTML = project.technologies[2];

  toolsList.appendChild(toolsItem1);
  toolsList.appendChild(toolsItem2);
  toolsList.appendChild(toolsItem3);

  const projectSumaryParagraph = document.createElement('p');
  projectSumaryParagraph.innerHTML = project.projectSumary;

  const projectDetailsButtonDiv = document.createElement('div');

  const projectDetailsButton = document.createElement('a');
  projectDetailsButton.classList.add(...['btn', 'btn-resume', 'mt-4']);
  projectDetailsButton.innerHTML = 'See the project';
  projectDetailsButtonDiv.appendChild(projectDetailsButton);

  projectDetailsButton.setAttribute('data-bs-toggle', 'modal');
  projectDetailsButton.setAttribute('data-bs-target', '#exampleModal');
  projectDetailsButton.setAttribute('data-project-name', project.name);
  projectDetailsButton.setAttribute(
    'data-project-description', project.description,
  );
  projectDetailsButton.setAttribute('data-project-img', project.featuredImage);
  projectDetailsButton.setAttribute('data-detail-1', project.projectScope[0]);
  projectDetailsButton.setAttribute('data-detail-2', project.projectScope[1]);
  projectDetailsButton.setAttribute('data-detail-3', project.projectScope[2]);
  projectDetailsButton.setAttribute('data-tool-1', project.projectScope[0]);
  projectDetailsButton.setAttribute('data-tool-2', project.projectScope[1]);
  projectDetailsButton.setAttribute('data-tool-3', project.projectScope[2]);
  projectDetailsButton.setAttribute('data-project-live-link', project.liveLink);
  projectDetailsButton.setAttribute('data-project-code-link', project.codeLink);

  projectDetailsButton.addEventListener('click', () => {
    document.getElementById('exampleModalToggleLabel2').innerHTML = projectDetailsButton.getAttribute('data-project-name');
    document.getElementById('detail1').innerHTML = projectDetailsButton.getAttribute('data-detail-1');
    document.getElementById('detail2').innerHTML = projectDetailsButton.getAttribute('data-detail-2');
    document.getElementById('detail3').innerHTML = projectDetailsButton.getAttribute('data-detail-3');

    document.getElementById('tool1').innerHTML = projectDetailsButton.getAttribute('data-tool-1');
    document.getElementById('tool2').innerHTML = projectDetailsButton.getAttribute('data-tool-2');
    document.getElementById('tool3').innerHTML = projectDetailsButton.getAttribute('data-tool-3');
    document
      .getElementById('img-project')
      .setAttribute(
        'src', projectDetailsButton.getAttribute('data-project-img'),
      );
    document.getElementById('project-description').innerHTML = projectDetailsButton.getAttribute('data-project-description');
    document.getElementById('livebtn').setAttribute(
      'href',
      projectDetailsButton.getAttribute('data-project-live-link'),
    );
    document
      .getElementById('codebtn')
      .setAttribute(
        'href', projectDetailsButton.getAttribute('data-project-code-link'),
      );
  });

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
