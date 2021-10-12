import burgerMenu from "./lib/burger-menu";
import { form, emailInput, submitForm, tablist, tabs, panels } from "./utils/elements";
import { validateEmailSubmission } from "./lib/validate-email";
import { switchTab } from "./lib/move-tabs";

/* Form validation
/* ==================================================== */
submitForm.addEventListener("click", function (event) {
  event.preventDefault();
  form.setAttribute("novalidate", "");
  validateEmailSubmission(emailInput);
});

/* Tab activation
/* ==================================================== */

// // Add the tablist role to the first <ul> in the .tabbed container
tablist.setAttribute("role", "tablist");

// Add semantics are remove user focusability for each tab
Array.prototype.forEach.call(tabs, (tab, index_) => {
  tab.setAttribute("role", "tab");
  tab.setAttribute("id", "tab" + (index_ + 1));
  tab.setAttribute("tabindex", "-1");
  tab.parentNode.setAttribute("role", "presentation");

  // Handle clicking of tabs for mouse users
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    const currentTab = tablist.querySelector("[aria-selected]");
    if (e.currentTarget !== currentTab) {
      switchTab(currentTab, e.currentTarget);
    }
  });

  // Handle keydown events for keyboard users
  tab.addEventListener("keydown", (e) => {
    // Get the index of the current tab in the tabs node list
    const index = Array.prototype.indexOf.call(tabs, e.currentTarget);
    // Work out which key the user is pressing and
    // Calculate the new tab's index where appropriate
    const dir =
      e.which === 37
        ? index - 1
        : e.which === 39
        ? index + 1
        : e.which === 40
        ? "down"
        : null;
    if (dir !== null) {
      e.preventDefault();
      // If the down key is pressed, move focus to the open panel,
      // otherwise switch to the adjacent tab
      dir === "down"
        ? panels[index_].focus()
        : tabs[dir]
        ? switchTab(e.currentTarget, tabs[dir])
        : void 0;
    }
  });
});

// Add tab panel semantics and hide them all
Array.prototype.forEach.call(panels, (panel, index) => {
  panel.setAttribute("role", "tabpanel");
  panel.setAttribute("tabindex", "-1");
  const id = panel.getAttribute("id");
  panel.setAttribute("aria-labelledby", tabs[index].id);
  panel.hidden = true;
});

// Initially activate the first tab and reveal the first tab panel
tabs[0].removeAttribute("tabindex");
tabs[0].setAttribute("aria-selected", "true");
panels[0].hidden = false;
