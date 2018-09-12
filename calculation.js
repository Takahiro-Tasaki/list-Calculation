$(function() {
  "use strict";

  var
    i,
    j,
    result,
    kindCalculation,
    $addition = $("#addition"),
    $multiplication = $("#multiplication"),
    $reset = $("#reset"),
    $calculation = $("#calculation");

    setCalculation();

    $addition.on("click", function() {
      setCalculation("Add");
    });

    $multiplication.on("click", function() {
      setCalculation("Mult");
    });

    $reset.on("click", function() {
      setCalculation("reset");
    });

    function setCalculation(kind) {
      $calculation.empty();
      switch (kind) {
        case "Add":
          kindCalculation = "+";
          break;
        case "Mult":
          kindCalculation = "*"
          break;
        default:
          kindCalculation = "";
      }
      for(i = 0; i < 10; i++) {
        $calculation.append($("<tr id='line" + i + "'>"));
        for(j = 0; j < 10; j++) {
          switch (kind) {
            case "Add":
              result = i + j;
              break;
            case "Mult":
              result = i * j;
              break;
          }
          if(i === 0 && j === 0) {
            $("#line" + i).append($("<td>").text(kindCalculation));
          } else if(i === 0 && j !== 0) {
            $("#line" + i).append($("<td>").text(j));
          } else if (i !== 0 && j === 0) {
            $("#line" + i).append($("<td>").text(i));
          } else {
            if (kindCalculation === "") {
              $("#line" + i).append($("<td>"));
            } else {
              $("#line" + i).append($("<td>").text(result));
            }
          }
        }
      }
    }
});