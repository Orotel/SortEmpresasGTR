const arrOfObj = []

function normalizedObj(companyName, companyArea, obs, OqueBuscão) {
  let obj = {};
  if (companyName) {
    obj.NomeEmpresa = companyName;
  }
  if (companyArea) {
    obj.AreaAtuação = companyArea;
  }
  if (obs) {
    obj.Observação = obs;
  }
  if (OqueBuscão) {
    obj.OqueBuscão = OqueBuscão;
  }
  return obj;
}



exports.normalizedObj = normalizedObj