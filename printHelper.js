/**
 * utils/printHelper.js
 * Library 2: Provides helper to print greetings to the console AND to the page UI
 */

(function (global) {
  "use strict";

  function PrintHelper() {}

  /**
   * Prints a greeting message to the browser console and to the page output panel.
   * @param {string} message - The full greeting string to print
   * @param {string} type    - 'hello' | 'goodbye'
   */
  PrintHelper.prototype.printOut = function (message, type) {
    // 1. Print to browser console
    console.log(message);

    // 2. Also render to the on-page output panel
    var outputEl = document.getElementById("output");
    if (outputEl) {
      var line = document.createElement("div");
      line.className = "output-line " + (type === "goodbye" ? "goodbye" : "hello");

      var icon = document.createElement("span");
      icon.className = "icon";
      icon.textContent = type === "goodbye" ? "👋" : "👋";

      var text = document.createElement("span");
      text.textContent = message;

      line.appendChild(icon);
      line.appendChild(text);
      outputEl.appendChild(line);

      // Update count badge
      var badge = document.getElementById("count-badge");
      if (badge) {
        var count = outputEl.querySelectorAll(".output-line").length;
        badge.textContent = count + " message" + (count !== 1 ? "s" : "");
      }
    }
  };

  global.$PrintHelper = new PrintHelper();
})(window);
