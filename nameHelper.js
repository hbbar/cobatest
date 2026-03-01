/**
 * utils/nameHelper.js
 * Library 1: Provides helper to check if a name starts with 'j' or 'J'
 */

(function (global) {
  "use strict";

  function NameHelper() {}

  /**
   * Returns true if the name starts with 'j' or 'J'
   * @param {string} name
   * @returns {boolean}
   */
  NameHelper.prototype.isJName = function (name) {
    if (typeof name !== "string" || name.length === 0) return false;
    return name.charAt(0).toLowerCase() === "j";
  };

  global.$NameHelper = new NameHelper();
})(window);
