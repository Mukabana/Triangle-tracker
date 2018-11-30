
var getValue = function() {

  var side1 = parseFloat(document.getElementById('length1').value);//converts input for side1 to a number
  var side2 = parseFloat(document.getElementById('length2').value);//converts input for side2 to a number
  var side3 = parseFloat(document.getElementById('length3').value);//converts input for side2 to a number



  if (side1===side2 && side2===side3) {
    alert("This is an equilateral triangle");
  }
  else if (side1===side2 || side1===side3 || side2===side3) {
    alert("This is an isosceles triangle");
  }
  else if (side1!==side2  || side2!==side3 || side1!==side3) {
    alert("This is a scalene triangle",);
  }
  else {
    alert("This is a not triangle");
  }

}
