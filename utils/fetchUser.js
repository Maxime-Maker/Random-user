// https://randomuser.me/
const url = 'https://randomuser.me/api/';

// récupère les infos de l'utilisateur et les retourne dans un objet
const fetchUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const { results } = { ...data };
  const {
    name: { last, first },
    email,
    dob: { age },
    location: {
      street: { number, name: way },
    },
    phone,
    login: { password },
    picture: { large },
  } = results[0];
  const name = `${last} ${first}`;
  const street = `${number} ${way}`;
  return { name, street, email, age, phone, password, large };
};

export default fetchUser;
