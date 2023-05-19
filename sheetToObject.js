const XLSX = require('xlsx');

function sheetToObject () {
  const workbook = XLSX.readFile('CRM GTR (1).xlsx');
  const worksheet = workbook.Sheets['Empresas'];
  return XLSX.utils.sheet_to_json(worksheet);
}

exports.sheetToObject = sheetToObject


