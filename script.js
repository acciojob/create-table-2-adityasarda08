function createTable() {
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  rn = Number(rn);
  cn = Number(cn);

  // Ignore non-numeric input
  if (isNaN(rn) || isNaN(cn)) {
    return;
  }

  // Reject zero or negative values
  if (rn <= 0 || cn <= 0) {
    alert("Rows and columns must be greater than 0");
    return;
  }

  const table = document.getElementById("myTable");

  // 🔥 REQUIRED for Cypress
  table.innerHTML = "";

  for (let i = 0; i < rn; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}
