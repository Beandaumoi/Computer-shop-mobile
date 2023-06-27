import axios from 'axios';
//https://datausa.io/api/data?drilldowns=Nation&measures=Population
async function getPopulation(drillDowns, measures) {
  const urlGetPopulation = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
  try {
    let result = [];
    let responseData = await axios.get(urlGetPopulation);
    responseData.data.data.forEach(function (item) {
      let myObject = {};
      myObject.nationId = item['ID Nation'];
      myObject.nationName = item['Nation'];
      myObject.year = item['Year'];
      myObject.population = item['Population'];
      result.push(myObject);
    });
    return result;
  }catch (error) {
    throw error;
  }
}
export default {
  getPopulation,
};
