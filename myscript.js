
function w3_open01() {
  document.getElementById("mySidebar01").style.display = "block";
}

function w3_close01() {
  document.getElementById("mySidebar01").style.display = "none";
}

function w3_open02() {
  document.getElementById("mySidebar02").style.display = "block";
}

function w3_close02() {
  document.getElementById("mySidebar02").style.display = "none";
}

function w3_open03() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close03() {
  document.getElementById("mySidebar").style.display = "none";
}

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", ""); 
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}


