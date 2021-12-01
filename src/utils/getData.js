const API = 'https://restcountries.com/v2/all';

const getData = async (id) => {
  const apiURL = id ? `${API}/${id}` : API;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Fetch err', err);
  }
};

export default getData;
