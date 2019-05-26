/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//
// Integration with main window and message view window
//


if (! ('aecreations' in window)) {
  window.aecreations = {};
}

if (! ('tb-upgrade' in window.aecreations)) {
  window.aecreations.tbUpgrade = {};
}
else {
  throw new Error("tbUpgrade object already defined");
}


window.aecreations.tbUpgrade = {

 handleEvent: function (aEvent)
  {
    // When this method is invoked, 'this' will not refer to the add-on's
    // overlay object.
    let that = window.aecreations.tbUpgrade;

    if (aEvent.type == "load") {
      that.init();
    }
    else if (aEvent.type == "unload") {
      window.removeEventListener("load", that, false);
      window.removeEventListener("unload", that, false);
    }
  },

  init: function ()
  {
    this._log("tb-upgrade: Hello World!");
  },

  // Helper
  _log: function (aMessage)
  {
    var consoleSvc = Components.classes["@mozilla.org/consoleservice;1"]
                               .getService(Components.interfaces
					             .nsIConsoleService);
    consoleSvc.logStringMessage(aMessage);
  }
};


//
// Event handler initialization
//

window.addEventListener("load", window.aecreations.tbUpgrade, false);
window.addEventListener("unload", window.aecreations.tbUpgrade, false);
