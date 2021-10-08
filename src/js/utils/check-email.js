/**
 * Check if email address is valid
 * @param      {string}   The email
 * @return     {boolean}  The result of the test
 */
export function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}
