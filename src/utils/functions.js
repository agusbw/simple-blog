function trimOpeningTag(string) {
  return string.slice(1);
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { trimOpeningTag, capitalizeFirstLetter };
