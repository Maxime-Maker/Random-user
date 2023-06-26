import get from './getElement.js';
import removeActive from './removeActive.js';

const img = get('.user-img');
const user = get('.user-value');
const title = get('.user-title');
const btns = document.querySelectorAll('.icon');

// affiche les infos de l'utilisateur
const displayUser = (person) => {
  img.src = person.large;
  user.textContent = person.name;
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener('click', (e) => {
      removeActive({ btns, btn });
      user.textContent = person[label];
      title.textContent = `My ${label} is`;
      e.currentTarget.classList.add('active');
    });
  });
  // pour chaque bouton, modifier le texte content de user et title
};

export default displayUser;
