const { getSingleCompany } = require('./getSingleCompany')

const jsonSheet = require('./sheetToObject').sheetToObject()
const { areaToArray } = require('./normalizeArea')
const arrayIncludeWord = require('./arrIncludeRegex').arrIncludeRegex
const { filterArea } = require('./ArrArea')
const { normalizedObj } = require('./CreateObj')

jsonSheet.forEach(function(company, i){
  const areaArr = areaToArray(company.area)

  for (let companyKeys in company){ // pega as chaves da empresa
    if(company[companyKeys] !== 'V') continue // se não tiver V toca pra frente
    
    const columnKeysArr = companyKeys.split(',') 
    columnKeysArr.forEach(columnKey => {
      if(!arrayIncludeWord(columnKey, areaArr)) {
        areaArr.push(columnKey) 
      }
    })
    
    
  } 
  console.log(normalizedObj(company.nome,areaArr,company.target,company.obs))
  
})
// const myObj = {
//   name:'anselmo',
//   companyArea:undefined,
//   idade:undefined
// }

// console.log(normalizedObj(myObj.name,myObj.idade))