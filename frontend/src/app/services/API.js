const baseURL = 'https://0zdu9dnzyh.execute-api.eu-west-1.amazonaws.com/Prod';

export const getBalance = () => {
  return fetch(baseURL + '/balance')
    .then(data => data.json())
    .catch(e => console.log(e));
};
export const getQuarters = () => {
  return fetch(baseURL + '/quarterly-finance-projections/2021')
    .then(data => data.json())
    .catch(e => console.log(e));
};
