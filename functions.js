export function replaceChar(str, index, chr) {
  str = str.substring(0, index) + chr + str.substring(index + 1, str.length);

  return str;
}

export function getAbout(aboutData) {
  return aboutData == null
    ? 'Please check back later'
    : aboutData.attributes.content;
}