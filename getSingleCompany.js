const { testRegex } = require("./regexForStringSearch");

function getSingleCompany (sheetJson, companyName) {
  return sheetJson.filter(company => testRegex(companyName, company.nome))
}

exports.getSingleCompany = getSingleCompany