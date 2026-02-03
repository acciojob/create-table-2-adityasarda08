function createTable() {
    //Write your code
	let rn = prompt("Input number of rows");

        // Prompt for number of columns
        let cn = prompt("Input number of columns");

        // Convert inputs to numbers
        rn = Number(rn);
        cn = Number(cn);

        var table = document.getElementById("myTable");
        for (var i = 0; i < rn; i++) {
          var row = table.insertRow(i);
          for (var j = 0; j < cn; j++) {
            var cell = row.insertCell(j);
            cell.innerHTML = "Row " + i  + " Cell " + j;
          }
        }
      }
