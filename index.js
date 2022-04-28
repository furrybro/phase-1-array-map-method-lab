const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function splitWords(string) {
  return string.split(' ');
}
function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
const titleCased = () => {

  const newSplitWords = tutorials
    .map(splitWords)
    .map((element) => element.map(capitalizeWord))
    .map((words) => words.join(' '))
    return newSplitWords;
}