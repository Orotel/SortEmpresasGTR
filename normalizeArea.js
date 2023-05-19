function areaToArray (area) {
  return area
    .replace(/\s/g, '')
    .split(',')
    .filter(element => element !== '');
}

exports.areaToArray = areaToArray