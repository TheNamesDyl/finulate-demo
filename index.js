(function() {
  currentScreen = $("homescreen");

  window.onload = function() {
    $("revenues").onclick = switchFromScreen(currentScreen, $("revenues"));
    $("expenses").onclick = switchFromScreen(currentScreen, $("expenses"));
    $("assumptions").onclick = switchFromScreen(
      currentScreen,
      $("assumptions")
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
