const mobileMenu = document.getElementById('mobile_menu');
if (mobileMenu) {
  mobileMenu.addEventListener('click', () => {
    const desktopMenu = document.getElementById('desktop_menu');
    mobileMenu.classList.toggle('active');
    if (desktopMenu) desktopMenu.classList.toggle('active');
  });
} else {
  // eslint-disable-next-line no-console
  console.warn('No element with id "mobile_menu" found. Mobile menu event listener not attached.');
}
//an array of objects to store project cards//
const projects = [
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
];
//function to create project cards
function createProjectCards(project) {
  const card = document.createElement('div');
  card.classList.add('project_card');
  const cardImage=document.createElement('img');
  cardImage.src = project.image;
  cardImage.alt = 'project card image';
  card.appendChild(cardImage);
  const cardTitle = document.createElement('h3');
  cardTitle.innerHTML = project.title;
  card.appendChild(cardTitle);
  const cardList = document.createElement('ul');
  project.technologies.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    cardList.appendChild(listItem);
  });
  card.appendChild(cardList);
  const cardBtn = document.createElement('button');
  cardBtn.type = 'button';
  cardBtn.innerHTML = 'see project';
  card.appendChild(cardBtn);
  return card;
}

//inserting project cards in the projects section
function insertCards(){
  const projectsContainer = document.getElementById('project_cards');
  if (!projectsContainer) {
    // Avoid throwing if the target container isn't present in the DOM
    // (useful during testing or on pages that don't include the projects section)
    // eslint-disable-next-line no-console
    console.warn('No element with id "project_cards" found. Skipping card insertion.');
    return;
  }
  projects.forEach((project) => {
    const projectCard = createProjectCards(project);
    projectsContainer.appendChild(projectCard);
  });
}
//event listeners to trigger the insertion of cards into the DOM
document.addEventListener('DOMContentLoaded',insertCards);
