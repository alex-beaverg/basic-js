const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name;
  let team = '';
  if (Array.isArray(members)) {
    for (name of members) {
      if (typeof name === 'string') {
              team = team + name.trim().charAt(0).toUpperCase();
      }
    }
    return team.split('').sort().join('');
  } else return false;
};
