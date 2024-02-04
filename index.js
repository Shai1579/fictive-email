const kebabCase = require("lodash.kebabcase");

const VALID_EMAIL =
  /^(([^<>$()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function isEmail(email) {
  return VALID_EMAIL.test(email);
}

function removeSpecialCharacters(str) {
  return str.replace(/[&/\\,$~%'@":*!?<>{}]/g, "");
}

function generate(userName, slug) {
  if (isEmail(userName)) return userName;
  if (!slug) throw new Error("slug is required");

  const cleanUserName = removeSpecialCharacters(userName);

  return `${kebabCase(cleanUserName)}@${slug}.com`;
}

module.exports = generate;
