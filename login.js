(function() {
  currentScreen = $("homescreen");

  window.onload = function() {};

  function currentScreen(beforeScreen, afterScreen) {
    currentScreen = afterScreen;
    beforeScreen.style.visibility = "hidden";
    afterScreen.style.visibility = "visible";
  }

  $("subscrip").onmouseover = function() {
    $("sub_customer").style.visibility = "visible";
  };

  // $("subscrip").addEventListener("click", function() {
  //   alert("hi");
  //   $("Group_add").style.visibility = "visible";
  // });

  function displayText() {
    $("Group_add").style.visibility = "visible";
  }

  function $(id) {
    return document.getElementById(id);
  }
})();
