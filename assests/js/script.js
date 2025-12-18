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
// an array of objects to store project cards//
const projects = [
  {
    image: './assests/images/project_image.png',
    title: 'Nkwain Portofolio Website',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: '#',
    // pop up window data
    sub: 'Keeping tract of hundreds of components',
    description: 'A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation.  Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
    live: 'https://nkwain-portfolio.vercel.app',
    source: 'https://github.com/justasakon/nkwain_portfolio',

  },
  {
    image: './assests/images/ab.jpg',
    title: 'Nkwain Portofolio Website',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: '#',
    // pop up window data
    sub: 'Keeping tract of hundreds of components',
    description: 'A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
    live: 'https://nkwain-portfolio.vercel.app',
    source: 'https://github.com/justasakon/nkwain_portfolio',

  },
  {
    image: './assests/images/ac.png',
    title: 'Nkwain Portofolio Website',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: '#',
    // pop up window data
    sub: 'Keeping tract of hundreds of components',
    description: 'A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
    live: 'https://nkwain-portfolio.vercel.app',
    source: 'https://github.com/justasakon/nkwain_portfolio',

  },
  {
    image: './assests/images/af.png',
    title: 'Nkwain Portofolio Website',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: '#',
    // pop up window data
    sub: 'Keeping tract of hundreds of components',
    description: 'A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
    live: 'https://nkwain-portfolio.vercel.app',
    source: 'https://github.com/justasakon/nkwain_portfolio',

  },
  {
    image: './assests/images/av.jpg',
    title: 'Nkwain Portofolio Website',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: '#',
    // pop up window data
    sub: 'Keeping tract of hundreds of components',
    description: 'A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
    live: 'https://nkwain-portfolio.vercel.app',
    source: 'https://github.com/justasakon/nkwain_portfolio',

  },
  {
    image: './assests/images/ad.jpg',
    title: 'Nkwain Portofolio Website',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: '#',
    // pop up window data
    sub: 'Keeping tract of hundreds of components',
    description: 'A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
    live: 'https://nkwain-portfolio.vercel.app',
    source: 'https://github.com/justasakon/nkwain_portfolio',

  },

];

// function to create popup modal (moved above card creation to avoid lint errors)
function openModal(project) {
  // remove any existing modal (prevents duplicates)
  const existing = document.getElementById('modal_container');
  if (existing) existing.remove();

  const prevActive = document.activeElement;

  // overlay
  const modal = document.createElement('div');
  modal.classList.add('modal_container');
  modal.id = 'modal_container';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');

  // content wrapper (scrollable)
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal_content');

  // close button
  const closeButton = document.createElement('button');
  closeButton.classList.add('close_button');
  closeButton.type = 'button';
  closeButton.innerHTML = '&times;';

  // image area
  const modalImageContainer = document.createElement('div');
  modalImageContainer.classList.add('modal_image_container');
  const modalImage = document.createElement('img');
  modalImage.src = project.image;
  modalImage.alt = project.title || 'project image';
  modalImageContainer.appendChild(modalImage);

  // title / subtitle
  const modalSub = document.createElement('h3');
  modalSub.innerHTML = project.sub || project.title;

  // tech list
  const modalTechlist = document.createElement('ul');
  (project.technologies || []).forEach((element) => {
    const listItem = document.createElement('li');
    listItem.textContent = element;
    modalTechlist.appendChild(listItem);
  });

  // description
  const modalDescription = document.createElement('p');
  modalDescription.innerHTML = project.description || '';

  // links
  const modalLinks = document.createElement('div');
  modalLinks.classList.add('modal_links');
  const seeLive = document.createElement('a');
  seeLive.href = project.live || '#';
  seeLive.textContent = 'see live';
  seeLive.target = '_blank';
  const seeSource = document.createElement('a');
  seeSource.href = project.source || '#';
  seeSource.textContent = 'see source';
  seeSource.target = '_blank';
  modalLinks.appendChild(seeLive);
  modalLinks.appendChild(seeSource);

  // assemble
  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalImageContainer);
  modalContent.appendChild(modalSub);
  modalContent.appendChild(modalTechlist);
  modalContent.appendChild(modalDescription);
  modalContent.appendChild(modalLinks);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // lock background scroll
  document.body.style.overflow = 'hidden';

  // key handler defined before close helper to satisfy linter

  // close helpers
  function closeModal() {
    const el = document.getElementById('modal_container');
    if (el) el.remove();
    document.body.style.overflow = '';

    if (prevActive && typeof prevActive.focus === 'function') prevActive.focus();
  }

  closeButton.addEventListener('click', closeModal);
  // click outside content closes
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function onKeyDown(e) {
    if (e.key === 'Escape') closeModal();
  }

  document.addEventListener('keydown', onKeyDown);

  // focus the close button for accessibility
  closeButton.focus();
}

// function to create project cards
function createProjectCards(project) {
  const card = document.createElement('div');
  card.classList.add('project_card');
  const cardImage = document.createElement('img');
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
  cardBtn.addEventListener('click', () => openModal(project));
  card.appendChild(cardBtn);
  return card;
}

// inserting project cards in the projects section
function insertProjectCards() {
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
// an array of objects to store about cards
const about = [
  {
    image: '#',
    title: 'Languages',
    technologies: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
  },
  {
    image: '#',
    title: 'Frameworks',
    technologies: ['React.js', 'Ruby on Rails', 'RSpec', 'Capybara', 'Selenium'],
  },
  {
    image: '#',
    title: 'Skills',
    technologies: ['Database management', 'Version Control', 'CLI', 'Web Development', 'API Design'],
  },
];

// function to create about card
function createAboutCard(item) {
  const card = document.createElement('div');
  card.classList.add('about_card');
  const cardImage = document.createElement('img');
  cardImage.src = item.image;
  cardImage.alt = 'about card image';
  card.appendChild(cardImage);
  const cardTitle = document.createElement('h3');
  cardTitle.innerHTML = item.title;
  card.appendChild(cardTitle);
  const cardList = document.createElement('ul');
  item.technologies.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    cardList.appendChild(listItem);
  });
  card.appendChild(cardList);
  return card;
}
// inserting about cards in about section
function insertAboutCards() {
  const aboutContainer = document.getElementById('about_cards');
  if (!aboutContainer) {
    // Avoid throwing if the target container isn't present in the DOM
    // (useful during testing or on pages that don't include the about section)
    // eslint-disable-next-line no-console
    console.warn('No element with id "about_cards" found. Skipping card insertion.');
    return;
  }
  about.forEach((item) => {
    const aboutCard = createAboutCard(item);
    aboutContainer.appendChild(aboutCard);
  });
}

// Run both insertions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  insertProjectCards();
  insertAboutCards();
});