function selectThirdOption(row) {
    const radios = row.querySelectorAll('input[type="radio"]');
    if (radios.length >= 3) {
        radios[3].checked = true; // Spam Rata Kanan
        console.log(`Selected third option in row:`, row);
    } else {
        console.log("Row has fewer than 3 radio options:", row);
    }
}

const table = document.querySelector('table') || document.body.querySelector('table[border="1"]');

if (table) {
    const rows = table.querySelectorAll('tr');
    if (rows.length > 0) {
        rows.forEach((row, index) => {
            if (index > 0 && row.querySelector('input[type="radio"]')) {
                selectThirdOption(row);
            }
        });
    } else {
        console.log("No rows found in the table.");
    }
} else {
    console.log("Table not found. Please inspect the DOM and adjust the selector.");
}

setTimeout(() => {
    console.log("Running script after delay...");
}, 2000);
