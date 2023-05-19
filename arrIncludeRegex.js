const testRegex = require('./regexForStringSearch').testRegex

/**
 * 
 * @param {string} word - palavra que deseja verificar se esta dentro do array 
 * @param {Array} arr - array do qual quer verificar se possui a palavra
 * @returns {Boolean} - Verdadeiro se array possui a palavra
 */
function arrIncludeRegex(word, arr) {
  return !!arr.find(element => testRegex(word, element))
}

exports.arrIncludeRegex = arrIncludeRegex