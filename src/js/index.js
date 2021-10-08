import burgerMenu from "./lib/burger-menu";
import { form, emailInput, submitForm } from "./utils/elements";
import { validateEmailSubmission } from "./lib/validate-email";

/* Form validation
/* ==================================================== */
submitForm.addEventListener("click", function (event) {
  event.preventDefault();
  form.setAttribute("novalidate", "");
  validateEmailSubmission(emailInput);
});
