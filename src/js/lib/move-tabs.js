import { tabs, panels } from "../utils/elements";

export const switchTab = (oldTab, newTab) => {
  newTab.focus();
  // Make the active tab focusable by the user (Tab key)
  newTab.removeAttribute("tabindex");
  // Set the selected state
  newTab.setAttribute("aria-selected", "true");
  oldTab.removeAttribute("aria-selected");
  oldTab.setAttribute("tabindex", "-1");
  // Get the indices of the new and old tabs to find the correct
  // tab panels to show and hide
  const index = Array.prototype.indexOf.call(tabs, newTab);
  const oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
  panels[oldIndex].hidden = true;
  panels[index].hidden = false;
};
