export const toPlural = (word: string) => {
  if (
    word[word.length - 1] === 's' ||
    word.endsWith('sh') ||
    word.endsWith('ch') ||
    word[word.length - 1] === 'x' ||
    word[word.length - 1] === 'z'
  ) {
    return word + 'es'
  } else if (word[word.length - 1] === 'y') {
    return word.substring(0, word.length - 1) + 'ies'
  } else {
    return word + 's'
  }
}
export const pluralize = (value: number, word: string) => {
  if (value === 1) return `${word}`
  return `${toPlural(word)}`
}
