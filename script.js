/**
 * script.js
 * Module 4 Assignment — Hello & Goodbye
 *
 * Instructions:
 * Loop over the 'names' array.
 * - If a name starts with 'j' or 'J' → print "Goodbye <Name>"
 * - Otherwise                        → print "Hello <Name>"
 */

(function () {
  "use strict";

  // ─── Step 1: Array of names to greet ──────────────────────────────────────
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Jackie",
    "James"
  ];

  // ─── Step 2: Loop and greet ────────────────────────────────────────────────
  function greetAll() {
    // Clear previous output
    var outputEl = document.getElementById("output");
    if (outputEl) outputEl.innerHTML = "";
    var badge = document.getElementById("count-badge");
    if (badge) badge.textContent = "0 messages";

    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      var message;

      // Use $NameHelper library (utils/nameHelper.js)
      if ($NameHelper.isJName(name)) {
        message = "Goodbye " + name;
        $PrintHelper.printOut(message, "goodbye");
      } else {
        message = "Hello " + name;
        $PrintHelper.printOut(message, "hello");
      }
    }
  }

  // ─── Step 3: Wire up buttons ───────────────────────────────────────────────
  document.getElementById("runBtn").addEventListener("click", greetAll);

  document.getElementById("clearBtn").addEventListener("click", function () {
    var outputEl = document.getElementById("output");
    if (outputEl) outputEl.innerHTML = "";
    var badge = document.getElementById("count-badge");
    if (badge) badge.textContent = "0 messages";
  });

  // ─── Step 4: Show source preview ──────────────────────────────────────────
  var preview = document.getElementById("code-preview");
  if (preview) {
    preview.textContent =
      'var names = ["Yaakov","John","Jen","Jason","Paul",\n' +
      '             "Frank","Larry","Paula","Jackie","James"];\n\n' +
      "for (var i = 0; i < names.length; i++) {\n" +
      '  if ($NameHelper.isJName(names[i])) {\n' +
      '    $PrintHelper.printOut("Goodbye " + names[i], "goodbye");\n' +
      "  } else {\n" +
      '    $PrintHelper.printOut("Hello " + names[i], "hello");\n' +
      "  }\n" +
      "}";
  }

})();
