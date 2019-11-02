var slideIndex = 1;
showDivs(slideIndex);



function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("imageslideshow");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}


function alert() {
    var alert = document.getElementById("alert");
    alert.style.display = "block";
}

// function openContent(obj, idContentContainer){
//   var i, x, tablinks;

//   x = document.getElementsByClassName("tabs");
//   for(i=0;i<x.length;i++){
//       x[i].style.display = "none";
//   }

//   tablinks = document.getElementsByClassName("tablink");
//   for(i=0;i<x.length;i++){
//       tablinks[i].className = tablinks[i].className.replace("w3-flat-peter-river","");
//   }

//   document.getElementById(idContentContainer).style.display = "block";
//   obj.currentTarget.className += "w3-flat-peter-river";
// }
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function openContent(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-orange", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-orange";
}
// function modal(){
//   var login = document.getElementsByClassName("modalLogin");
//   login.style.display = "none";
// }
var fruits = ["Billie Eilish Bad Guy", "Budi Doremi Tolong", "Dipha Barus Money Honey", "Dipha Barus ft. Kallula  No One Can Stop Us", "Ed Sheeran & Justin Bieber - I Don t Care",
    "HONNE - Location Unknown", "Khalid Talk", "Maroon-5 Memories", "Panini Lil NasX", "Polka Wars Rangkum",
    "Luchee", "Mango", "Orange", "Papaya", "Peach",
    "Selena Gomez Lose You To Love Me", "Yovie, Tulus, Glenn Fredly Adu Rayu"
];

function autocomplete(input, arr) {
    var currentFocus;

    input.addEventListener("input", function(e) {
        var container, matchelem, i, val = this.value;
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        container = document.createElement("DIV");
        container.setAttribute("id", this.id + "autocomplete-list");
        container.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(container);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                matchelem = document.createElement("DIV");
                matchelem.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                matchelem.innerHTML += arr[i].substr(val.length);
                matchelem.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                matchelem.addEventListener("click", function(e) {
                    input.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                container.appendChild(matchelem);
            }
        }
    });
    input.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) {
            x = x.getElementsByTagName("div");
        }
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) { //up
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) {
                    x[currentFocus].click();
                }
            }
        }
    });

    function addActive(x) {
        if (!x) {
            return false;
        }
        removeActive(x);
        if (currentFocus >= x.length) {
            currentFocus = 0;
        }
        if (currentFocus < 0) {
            currentFocus = (x.length - 1);
        }
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != input) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });

    // var masukan = document.getElementById("MyInput");
}
autocomplete(document.getElementById("MyInput"), fruits);