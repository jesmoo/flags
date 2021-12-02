const API = 'https://restcountries.com/v2';

const getData = async (name) => {
  const apiURL = name ? `${API}/name/${name}` : `${API}/all`;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Fetch err', err);
  }
};

export default getData;
