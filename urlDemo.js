import url from 'url';

const urlString = 'http://www.google.com/search?q=hello+world';

//URL object
const urlObj = new URL(urlString);

console.log(urlObj);

//format()
console.log(url.format(urlObj));

//import.meta.url-file URL
console.log(import.meta.url);

//fileUrl to path()
console.log(url.fileURLToPath(import.meta.url));
