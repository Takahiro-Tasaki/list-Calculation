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

    setArea();

    $addition.on("click", function() {
      setCalculation("Add");
    });

    $multiplication.on("click", function() {
      setCalculation("Mult");
    });

    $reset.on("click", function() {
      setCalculation("Reset");
    });

    function setArea() {
      for(i = 0; i < 10; i++) {
        $calculation.append($("<tr>").attr("id", "line" + i));
        for(j = 0; j < 10; j++) {
          if(i === 0 && j === 0) {
            $("#line" + i).append($("<td>").attr("id", "kind"));
          } else if(i === 0 && j !== 0) {
            $("#line" + i).append($("<td>").text(j));
          } else if (i !== 0 && j === 0) {
            $("#line" + i).append($("<td>").text(i));
          } else {
            $("#line" + i).append($("<td>"));
          }
        }
      }
    }

    function setCalculation(kind) {
      switch (kind) {
        case "Add":
          kindCalculation = "+";
          break;
        case "Mult":
          kindCalculation = "*";
          break;
        case "Reset":
          kindCalculation = "";
          break;
      }
      $("#kind").text(kindCalculation);

      for(i = 1; i < 10; i++) {
        for(j = 1; j < 10; j++) {
          switch (kind) {
            case "Add":
              result = i + j;
              break;
            case "Mult":
              result = i * j;
              break;
            case "Reset":
              result = "";
              break;
          }
          $("#line" + i).find("td").eq(j).text(result);
        }
      }
    }
});