import { LOCALE, DATE_OPTIONS } from "../constants";

function trimOpeningTag(string) {
  return string.slice(1);
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString(LOCALE, DATE_OPTIONS);
}

export { trimOpeningTag, capitalizeFirstLetter, formatDate };
