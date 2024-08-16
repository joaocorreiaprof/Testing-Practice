function caesarCipher(string, number) {
  let result = "";
  number = number % 26;
  if (number < 0) number += 26;

  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + number) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + number) % 26) + 97);
    } else {
      result += string[i];
    }
  }
  return result;
}
export { caesarCipher };
