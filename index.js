(function() {
  currentScreen = $("homescreen");

  window.onload = function() {
    
    );
  };

  function currentScreen(beforeScreen, afterScreen) {
    currentScreen = afterScreen;
    beforeScreen.style.visibility = "hidden";
    afterScreen.style.visibility = "visible";
  }

  function $(id) {
    return document.getElementById(id);
  }
})();
