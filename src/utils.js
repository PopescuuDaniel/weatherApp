export const fetchProducatWeather = (category) => {
  return fetch(`https://api.openweathermanp.org/data/2.5/0/${category}`);
};
