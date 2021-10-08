import { form, errorField, emailInput, inputWrapper } from "../utils/elements";
import { emailIsValid } from "../utils/check-email.js";

/**
 * Check input for valid email on key down
 * @param      {object}   The event object
 */
function validateEmailKeydown(event) {
  if (emailIsValid(event.target.value)) {
    // errorField.classList.remove("error");
    // emailInput.classList.remove("error");
    inputWrapper.classList.remove("error");
  } else {
    // errorField.classList.add("error");
    // emailInput.classList.add("error");
    inputWrapper.classList.add("error");
  }
}

/**
 * Check input for valid email on form submission
 * @param      {object}   The event object
 */
export function validateEmailSubmission(inputToCheck) {
  if (emailIsValid(inputToCheck.value)) {
    form.submit();
  } else {
    // errorField.classList.add("error");
    // emailInput.classList.add("error");
    inputWrapper.classList.add("error");
    inputToCheck.addEventListener("keydown", validateEmailKeydown);
  }
}
