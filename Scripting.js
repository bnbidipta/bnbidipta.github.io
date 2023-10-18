// dropdown.js
var subjectObject = {
    "New Delhi": [
      "Kamla Nagar", "Majnu Ka Tila", "Chandni Chowk", "Delhi Sadar Bazaar",
      "Anand Vihar", "Preet Vihar", "Mayur Vihar",
      "GK 2", "Malviya Nagar", "Vasant Kunj", "Saket",
      "Rajouri", "Punjabi Bagh"
    ],
    "Mumbai": [
      "Nancy Colony", "Gorai", "Shimpoli",
      "Grant Road", "Worli", "Colaba",
      "Kemp's Corner", "Napean Sea Road",
      "Aram Nagar", "Versova", "Model Town"
    ],
    "Bengaluru": [
      "Indiranagar", "Marathahalli", "Horamavu", "Hebbal", "Nagasandra",
      "Whitefield", "Rajaji Nagar", "Cox Town",
      "Kormangala"
    ]
  };
  
  window.onload = function () {
    var citySel = document.getElementById("city");
    var areaSel = document.getElementById("area");
  
    for (var x in subjectObject) {
      citySel.options[citySel.options.length] = new Option(x, x);
    }
  
    citySel.onchange = function () {
      // Empty Areas dropdown
      areaSel.length = 1;
  
      // Display correct values
      var selectedCity = this.value;
      for (var i = 0; i < subjectObject[selectedCity].length; i++) {
        areaSel.options[areaSel.options.length] = new Option(subjectObject[selectedCity][i], subjectObject[selectedCity][i]);
      }
    };
  };
