/*niet meer nodig*/

/*function myFunction() {
  var x = document.getElementById("mijnDiv");
  if (x.style.opacity === "0") {
    x.style.opacity = "100";
  } else {
    x.style.opacity = "0";
  }
}*/

/*Verwijdert het formulier na verzending*/

function myFunction() {
  var elem = document.getElementById("contact");
  elem.parentNode.removeChild(elem);

}

/*Zorgt voor de pop up en de animatie*/

    var closePopup = document.getElementById("popupclose");
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    var button = document.getElementById("button");
    overlay.onclick = function() {
        overlay.className = '';
        popup.className = '';
    };
    closePopup.onclick = function() {
        overlay.className = '';
        popup.className = '';
    };
    button.onclick = function() {
        overlay.className = 'show';
        popup.className = 'show';
    }
